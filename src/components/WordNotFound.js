import React from "react";
import {
  Emoji,
  WordNotFoundContainer,
  WordNotFoundHeader,
} from "../styles/App.styles";
import Joke from "./Joke";
import MonkeyMeme from "./../assets/meme_monkey.jpg";
import WhatIsHappeningMeme from "./../assets/meme_what_is_happening.jpg";
import OneSimplyMeme from "./../assets/meme_one_simply.jpg";
import { MemeImg } from "../styles/WordNotFound.styles";

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
        <WordNotFoundHeader>The word is not found</WordNotFoundHeader>
        {this.state.meme && this.state.meme === "Joke" ? (
          <Joke />
        ) : (
          <MemeImg src={this.state.meme} />
        )}
      </WordNotFoundContainer>
    );
  }
}
