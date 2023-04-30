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
} from "./styles/App.styles";
import SoundButton from "./components/SoundButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsWord: {},
      inputWord: "",
      audioSrc: "",
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
            let audioSrc =
              "https://api.dictionaryapi.dev/media/pronunciations/en/word-us.mp3";
            // this.state.detailsWord.phonetics.find(
            //   (phonetic) => phonetic.audio.length > 0
            // ).audio;
            this.onTrackChange(audioSrc);
            this.setState({ audioSrc });
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
  onTrackChange(source) {
    this.setState({ audioSrc: source }, () => {});
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <MainContainer>
          <SearchBar onInputChange={this.changeWord} />
          <SoundButton newWord={this.state.detailsWord} />
          {this.state.detailsWord && (
            <div>
              {!this.state.detailsWord.word && (
                <WordNotFoundContainer>
                  <WordNotFoundHeader>The word is not found</WordNotFoundHeader>
                  <Emoji>😞</Emoji>
                </WordNotFoundContainer>
              )}
              <HeaderContainer>
                <WordTranscrContainer>
                  {!this.state.detailsWord.word && (
                    <WordHeader>{this.state.detailsWord.word}</WordHeader>
                  )}
                  {this.state.detailsWord.phonetics && (
                    <h2>{this.state.detailsWord.phonetics[0].text}</h2>
                  )}
                </WordTranscrContainer>
              </HeaderContainer>
              {this.state.detailsWord.word && <h3>MEANINGS</h3>}
              <div>
                {this.state.detailsWord.meanings &&
                  this.state.detailsWord.meanings.map(
                    ({ partOfSpeech, definitions }, index) => (
                      <div key={index}>
                        <h4> {partOfSpeech}</h4>
                        <ul>
                          {definitions.map((element) => {
                            return element.definition ? (
                              <li>{element.definition}</li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )
                  )}
              </div>
              {this.state.detailsWord.word && <h3>SYNONYMS</h3>}
              <>
                {this.state.detailsWord.meanings &&
                  this.state.detailsWord.meanings[0].synonyms.map((synonym) => {
                    return synonym ? <span>{synonym}, </span> : null;
                  })}
              </>
            </div>
          )}
        </MainContainer>
      </div>
    );
  }
}

export default App;
