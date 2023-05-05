import React from "react";
import {
  Emoji,
  WordNotFoundContainer,
  WordNotFoundHeader,
} from "../styles/App.styles";
import Joke from "./Joke";

export default class WordNotFound extends React.Component {
  render() {
    return (
      <WordNotFoundContainer>
        <WordNotFoundHeader>The word is not found</WordNotFoundHeader>
        <Emoji>😞</Emoji>
        <Joke />
      </WordNotFoundContainer>
    );
  }
}
