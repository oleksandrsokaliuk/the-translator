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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsWord: "",
      inputWord: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputWord !== prevState.inputWord) {
      try {
        axios
          .get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.inputWord}`
          )
          .then((result) => {
            this.setState({
              detailsWord: result.data[0],
            });
          });
      } catch (e) {
        console.error(e);
      }
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
          {!this.state.detailsWord && (
            <div>
              <h2>Type your word</h2>
            </div>
          )}
          {this.state.detailsWord && (
            <div>
              {!this.state.detailsWord.word && (
                <WordNotFoundContainer>
                  <WordNotFoundHeader>The word is not found</WordNotFoundHeader>
                  <Emoji>😞</Emoji>
                </WordNotFoundContainer>
              )}
              <WordHeader detailsWord={this.state.detailsWord} />
              <div>
                <Meanings detailsWord={this.state.detailsWord} />
                <SynAndAnt detailsWord={this.state.detailsWord} />
                <Source inputWord={this.state.inputWord} />
              </div>
            </div>
          )}
        </MainContainer>
      </div>
    );
  }
}

export default App;
