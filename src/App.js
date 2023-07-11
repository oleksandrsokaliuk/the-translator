import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import GlobalStyle from "./styles/Global.styles";
import {
  Emoji,
  MainContainer,
  WordNotFoundHeader,
  WordNotFoundContainer,
} from "./styles/App.styles";
import SynAndAnt from "./components/SynAndAnt";
import Meanings from "./components/Meanings";
import Source from "./components/Source";
import WordHeader from "./components/WordHeader";
import OriginalView from "./components/OriginalView";
import WordNotFound from "./components/WordNotFound";
import AdditionalWord from "./components/AdditionalWord";
import { AnimatePresence, motion } from "framer-motion";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsWord: "",
      inputWord: "",
      isInputTouched: false,
      isWordFound: true,
    };
  }

  async fetchData() {
    try {
      this.setState({ detailsWord: "" });
      const word = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.inputWord}`
      );
      this.setState({ isWordFound: true });
      console.log(word.status);
      word
        ? this.setState({
            detailsWord: word.data[0],
            isInputTouched: true,
          })
        : this.setState({
            detailsWord: "",
            isInputTouched: true,
          });
    } catch (error) {
      if (error.response.status === 404) {
        this.setState({ isWordFound: false });
        return;
      }
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputWord !== prevState.inputWord) {
      this.fetchData();
    }
  }
  changeWord = (event) => {
    if (event.target.value.length !== 0) {
      setTimeout(() => {
        this.setState({ inputWord: event.target.value });
      }, 1000);
    }
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <MainContainer>
          <SearchBar onInputChange={this.changeWord} />
          {this.state.isWordFound && (
            <OriginalView
              detailsWord={this.state.detailsWord}
              isInputTouched={this.state.isInputTouched}
            />
          )}
          {!this.state.isWordFound && (
            <WordNotFound
              detailsWord={this.state.detailsWord}
              isInputTouched={this.state.isInputTouched}
              text="The word is not found"
            />
          )}
          <AnimatePresence>
            {this.state.detailsWord && this.state.isWordFound && (
              <motion.div
                initial={{ transform: "translateY(1000px)" }}
                animate={{ transform: "translateY(0)" }}
                transition={{ ease: "easeOut", duration: 1 }}
                exit={{ transform: "translateY(5000px)" }}
              >
                <WordHeader detailsWord={this.state.detailsWord} />
                <Meanings detailsWord={this.state.detailsWord} />
                <SynAndAnt
                  detailsWord={this.state.detailsWord}
                  additionalWord={this.additionalWord}
                />
                <Source inputWord={this.state.inputWord} />
              </motion.div>
            )}
          </AnimatePresence>
        </MainContainer>
      </div>
    );
  }
}

export default App;
