import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import GlobalStyle from "./styles/Global.styles";
import {
  Emoji,
  MainContainer,
  WordNotFoundHeader,
  WordHeader,
  HeaderContainer,
  WordTranscrContainer,
  WordNotFoundContainer,
  WordTranscr,
  SynonymsListContainer,
  PartOfSpeechHeader,
  DefinitionListItems,
} from "./styles/App.styles";
import SoundButton from "./components/SoundButton";

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
            console.log(result.data[0]);
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
              {this.state.detailsWord.word && (
                <HeaderContainer>
                  <WordHeader>{this.state.detailsWord.word}</WordHeader>
                  <SoundButton newWord={this.state.detailsWord} />
                  {this.state.detailsWord.phonetics && (
                    <WordTranscr>
                      {this.state.detailsWord.phonetics[0].text}
                    </WordTranscr>
                  )}
                </HeaderContainer>
              )}
              <div>
                {this.state.detailsWord.meanings &&
                  this.state.detailsWord.meanings.map(
                    ({ partOfSpeech, definitions }, index) => (
                      <div key={index}>
                        <div style={{ position: "relative" }}>
                          <PartOfSpeechHeader>
                            {partOfSpeech}
                          </PartOfSpeechHeader>
                        </div>
                        {<h3 style={{ color: "gray" }}>Meaning</h3>}
                        <ul style={{ listStyle: "none" }}>
                          {definitions.map((element) => {
                            return element.definition ? (
                              <DefinitionListItems>
                                {element.definition}
                              </DefinitionListItems>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )
                  )}
              </div>
              {this.state.detailsWord?.meanings[0].synonyms && (
                <h3 style={{ display: "inline", color: "gray" }}>Synonyms: </h3>
              )}
              <SynonymsListContainer>
                {this.state.detailsWord.meanings &&
                  this.state.detailsWord.meanings[0].synonyms.map((synonym) => {
                    return synonym ? <span>{synonym}, </span> : null;
                  })}
              </SynonymsListContainer>
              <div>
                <hr />
                <h3 style={{ display: "inline", color: "gray" }}>Source: </h3>
                <a
                  style={{ dipaly: "inline" }}
                  target="_blank"
                  href={`https://api.dictionaryapi.dev/api/v2/entries/en/
                ${this.state.inputWord}`}
                >
                  https://api.dictionaryapi.dev/api/v2/entries/en/
                  {this.state.inputWord}
                </a>
              </div>
            </div>
          )}
        </MainContainer>
      </div>
    );
  }
}

export default App;
