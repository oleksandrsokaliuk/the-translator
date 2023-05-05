import React from "react";
import {
  MainSynAndAntContainer,
  SynAndAntLink,
  SynAndAntListContainer,
  SynAndAntListHeader,
  SynAndAntSpan,
} from "../styles/SynAndAnt.styles";
import AdditionalWord from "./AdditionalWord";
import axios from "axios";

export default class SynAndAnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalWord: "",
    };
  }

  async fetchDataAdd(addWord) {
    const word = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${addWord}`
    );
    this.setState({ additionalWord: word.data[0] });
  }

  changeToUnvisible = () => {
    this.setState({ additionalWord: "" });
  };

  render() {
    return (
      <MainSynAndAntContainer>
        <AdditionalWord
          visible={!!this.state.additionalWord}
          additionalWord={this.state.additionalWord}
          changeToUnvisible={this.changeToUnvisible}
        />
        <SynAndAntListContainer>
          {this.props.detailsWord?.meanings[0].synonyms.length > 0 && (
            <SynAndAntListHeader>Synonyms: </SynAndAntListHeader>
          )}
          {this.props.detailsWord?.meanings &&
            this.props.detailsWord?.meanings[0].synonyms.map((synonym) => {
              return synonym ? (
                <SynAndAntSpan
                  onClick={() => {
                    this.fetchDataAdd(synonym);
                  }}
                >
                  {synonym + " "}
                </SynAndAntSpan>
              ) : null;
            })}
        </SynAndAntListContainer>
        <hr />
      </MainSynAndAntContainer>
    );
  }
}
