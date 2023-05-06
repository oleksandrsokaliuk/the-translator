import React from "react";
import {
  HeaderContainer,
  Word,
  WordTranscr,
} from "../styles/WordHeader.styles";
import SoundButton from "./SoundButton";

export default class WordHeader extends React.Component {
  render() {
    return (
      this.props.detailsWord?.word && (
        <HeaderContainer>
          <Word>{this.props.detailsWord.word}</Word>
          <SoundButton newWord={this.props.detailsWord} />
          {this.props.detailsWord.phonetics && (
            <WordTranscr>
              {this.props.detailsWord.phonetics[0]?.text}
            </WordTranscr>
          )}
        </HeaderContainer>
      )
    );
  }
}
