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
      isAddWordFound: false,
    };
  }

  async fetchDataAdd(addWord) {
    try {
      const word = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${addWord}`
      );
      console.log(word.data[0]);
      this.setState({ additionalWord: word.data[0], isAddWordFound: true });
    } catch (error) {
      if (error.response.status === 404) {
        this.setState({ isAddWordFound: false });
        return;
      }
      console.error(error);
    }
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
          isAddWordFound={this.state.isAddWordFound}
        />
        <SynAndAntListContainer>
          {this.props.detailsWord?.meanings[0].synonyms.length > 0 && (
            <SynAndAntListHeader>Synonyms: </SynAndAntListHeader>
          )}
          {this.props.detailsWord?.meanings &&
            this.props.detailsWord?.meanings[0].synonyms.map((synonym) => {
              return synonym
                ? synonym.split(" ").map((oneSynonym) => (
                    <SynAndAntSpan
                      onClick={() => {
                        this.fetchDataAdd(oneSynonym);
                      }}
                    >
                      {oneSynonym + " "}
                    </SynAndAntSpan>
                  ))
                : null;
            })}
        </SynAndAntListContainer>
        <hr />
      </MainSynAndAntContainer>
    );
  }
}
