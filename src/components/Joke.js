import React from "react";
import axios from "axios";
import { JokeContainer, JokeText, ShowJokeButton } from "../styles/Joke.styles";

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
      <JokeContainer onClick={this.showJoke}>
        <ShowJokeButton>Read a joke to relax</ShowJokeButton>
        {this.state.joke && this.state.isJokeShown && (
          <JokeText>{this.state.joke}</JokeText>
        )}
      </JokeContainer>
    );
  }
}
