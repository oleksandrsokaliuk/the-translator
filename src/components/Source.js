import React from "react";
import { SourceHeader, SourceLink } from "../styles/Source.styles";

export default class Source extends React.Component {
  render() {
    return (
      <>
        <SourceHeader>Source: </SourceHeader>
        <SourceLink
          target="_blank"
          href={`https://api.dictionaryapi.dev/api/v2/entries/en/
                ${this.props.inputWord}`}
        >
          https://api.dictionaryapi.dev/api/v2/entries/en/
          {this.props.inputWord}
        </SourceLink>
      </>
    );
  }
}
