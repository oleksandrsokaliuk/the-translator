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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsWord: "",
      inputWord: "",
      isInputTouched: false,
    };
  }

  async fetchData() {
    const word = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.inputWord}`
    );
    console.log(word);
    word
      ? this.setState({
          detailsWord: word.data[0],
          isInputTouched: true,
        })
      : this.setState({
          detailsWord: "",
          isInputTouched: true,
        });
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
          <OriginalView
            detailsWord={this.state.detailsWord}
            isInputTouched={this.state.isInputTouched}
          />
          <WordNotFound
            detailsWord={this.state.detailsWord}
            isInputTouched={this.state.isInputTouched}
          />
          {this.state.detailsWord && (
            <div>
              <WordHeader detailsWord={this.state.detailsWord} />
              <Meanings detailsWord={this.state.detailsWord} />
              <SynAndAnt
                detailsWord={this.state.detailsWord}
                fetchDataAdd={this.fetchDataAdd}
                additionalWord={this.additionalWord}
              />
              <Source inputWord={this.state.inputWord} />
            </div>
          )}
        </MainContainer>
      </div>
    );
  }
}

export default App;
