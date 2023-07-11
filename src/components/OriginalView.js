import React from "react";
import {
  OriginalViewContainer,
  OriginalViewDescription,
  OriginalViewHeader,
  TitleSpan,
} from "../styles/OriginalView.styles";
import { motion } from "framer-motion";

export default class OriginalView extends React.Component {
  render() {
    return (
      <>
        {!this.props.detailsWord && !this.props.isInputTouched && (
          <OriginalViewContainer>
            <OriginalViewHeader
              initial={{ opacity: 0, scale: 5 }}
              transition={{ duration: 2 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              Welcome to <TitleSpan>The Translator</TitleSpan>
            </OriginalViewHeader>
            <OriginalViewDescription
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: 2 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <TitleSpan>The Translator</TitleSpan> allows you to learn new
              english words
            </OriginalViewDescription>
            <OriginalViewDescription
              style={{ textDecoration: "underline" }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: 2 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Simply type a word that you wish to learn
            </OriginalViewDescription>
          </OriginalViewContainer>
        )}
      </>
    );
  }
}
