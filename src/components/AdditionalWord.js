import React from "react";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";
import {
  AdditionalWordContainer,
  CloseButton,
  CloseDiv,
  CloseIcon,
} from "../styles/AdditionalWord";

export default class AdditionalWord extends React.Component {
  render() {
    return (
      this.props.additionalWord && (
        <AdditionalWordContainer visible={this.props.visible}>
          <CloseDiv onClick={this.props.changeToUnvisible}>
            <CloseIcon />
          </CloseDiv>
          <WordHeader detailsWord={this.props.additionalWord} />
          <Meanings detailsWord={this.props.additionalWord} />
        </AdditionalWordContainer>
      )
    );
  }
}
