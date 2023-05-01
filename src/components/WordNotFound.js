import React from "react";
import {
  Emoji,
  WordNotFoundContainer,
  WordNotFoundHeader,
} from "../styles/App.styles";

export default class WordNotFound extends React.Component {
  render() {
    return (
      !this.props.detailsWord &&
      this.props.isInputTouched && (
        <WordNotFoundContainer>
          <WordNotFoundHeader>The word is not found</WordNotFoundHeader>
          <Emoji>😞</Emoji>
        </WordNotFoundContainer>
      )
    );
  }
}
