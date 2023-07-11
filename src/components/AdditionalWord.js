import React from "react";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";
import {
  AdditionalWordContainer,
  CloseButton,
  CloseDiv,
  CloseIcon,
} from "../styles/AdditionalWord";
import WordNotFound from "./WordNotFound";
import { AnimatePresence } from "framer-motion";

export default class AdditionalWord extends React.Component {
  render() {
    return (
      <AnimatePresence>
        {this.props.additionalWord && (
          <AdditionalWordContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            visible={this.props.visible}
          >
            <CloseDiv onClick={this.props.changeToUnvisible}>
              <CloseIcon />
            </CloseDiv>
            {this.props.isAddWordFound ? (
              <>
                <WordHeader detailsWord={this.props.additionalWord} />
                <Meanings detailsWord={this.props.additionalWord} />
              </>
            ) : (
              <WordNotFound text="The word is absent in the database" />
            )}
          </AdditionalWordContainer>
        )}
      </AnimatePresence>
    );
  }
}
