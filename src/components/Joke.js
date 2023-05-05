import React from "react";
import axios from "axios";

export default class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: "",
    };
  }
  async fetchJoke() {
    const joke = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,religious,political,sexist&lang=en&type=single"
    );
    console.log(joke.data.joke);
    this.setState({ joke: joke.data.joke });
  }
  componentDidMount() {
    this.fetchJoke();
    console.log(this.state.joke);
  }
  render() {
    return <div>{this.state.joke && <h3>{this.state.joke}</h3>}</div>;
  }
}
