import React from "react";
import {
  OriginalViewContainer,
  OriginalViewDescription,
  OriginalViewHeader,
  TitleSpan,
} from "../styles/OriginalView.styles";

export default class OriginalView extends React.Component {
  render() {
    return (
      <>
        {!this.props.detailsWord && !this.props.isInputTouched && (
          <OriginalViewContainer>
            <OriginalViewHeader>
              Welcome to <TitleSpan>The Translator</TitleSpan>
            </OriginalViewHeader>
            <OriginalViewDescription>
              <TitleSpan>The Translator</TitleSpan> allows you to learn new
              english words
            </OriginalViewDescription>
            <OriginalViewDescription style={{ textDecoration: "underline" }}>
              Simply type a word that you wish to learn
            </OriginalViewDescription>
          </OriginalViewContainer>
        )}
      </>
    );
  }
}
