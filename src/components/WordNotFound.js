import React from "react";
import Joke from "./Joke";
import MonkeyMeme from "./../assets/meme_monkey.jpg";
import WhatIsHappeningMeme from "./../assets/meme_what_is_happening.jpg";
import OneSimplyMeme from "./../assets/meme_one_simply.jpg";
import {
  MemeImg,
  WordNotFoundContainer,
  WordNotFoundHeader,
} from "../styles/WordNotFound.styles";
import { AnimatePresence } from "framer-motion";

export default class WordNotFound extends React.Component {
  constructor() {
    super();
    this.state = {
      meme: "",
    };
  }
  getRandomMeme() {
    const memes = [
      MonkeyMeme,
      "Joke",
      WhatIsHappeningMeme,
      "Joke",
      OneSimplyMeme,
      "Joke",
    ];
    const memeIdx = Math.ceil(Math.random() * memes.length - 1);
    this.setState({
      meme: memes[memeIdx],
    });
  }
  componentDidMount() {
    this.getRandomMeme();
  }

  render() {
    return (
      <WordNotFoundContainer>
        <WordNotFoundHeader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {this.props.text}
        </WordNotFoundHeader>
        <AnimatePresence>
          {this.state.meme && this.state.meme === "Joke" ? (
            <Joke />
          ) : (
            <MemeImg
              src={this.state.meme}
              initial={{ opacity: 0, transform: "scale(0)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
      </WordNotFoundContainer>
    );
  }
}
