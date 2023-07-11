import React from "react";
import axios from "axios";
import {
  JokeButtonContainer,
  JokeContainer,
  JokeText,
  JokeTextContainer,
  ShowJokeButton,
} from "../styles/Joke.styles";
import { AnimatePresence, motion } from "framer-motion";

export default class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      isJokeShown: false,
    };
  }
  async fetchJoke() {
    const getJoke = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,religious,political,sexist&lang=en&type=single"
    );
    const joke = getJoke.data.joke;
    console.log(joke);
    this.setState({ joke });
  }
  showJoke = () => {
    this.setState((prevState) => ({
      isJokeShown: !prevState.isJokeShown,
    }));
  };

  componentDidMount() {
    this.fetchJoke();
    console.log(this.state.joke);
  }
  render() {
    return (
      <JokeContainer
        isJokeShown={this.state.isJokeShown}
        onClick={this.showJoke}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence>
          {!this.state.isJokeShown ? (
            <ShowJokeButton
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
            >
              Read a joke
            </ShowJokeButton>
          ) : (
            this.state.joke && (
              <JokeText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{ opacity: 0 }}
              >
                {this.state.joke}
              </JokeText>
            )
          )}
        </AnimatePresence>
      </JokeContainer>
    );
  }
}
