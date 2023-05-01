import React from "react";
import {
  MainSynAndAntContainer,
  SynAndAntLink,
  SynAndAntListContainer,
  SynAndAntListHeader,
  SynAndAntSpan,
} from "../styles/SynAndAnt.styles";

export default class SynAndAnt extends React.Component {
  render() {
    return (
      <MainSynAndAntContainer>
        <SynAndAntListContainer>
          {this.props.detailsWord?.meanings[0].synonyms.length > 0 && (
            <SynAndAntListHeader>Synonyms: </SynAndAntListHeader>
          )}
          {this.props.detailsWord?.meanings &&
            this.props.detailsWord?.meanings[0].synonyms.map((synonym) => {
              return synonym ? (
                <SynAndAntSpan>{synonym}, </SynAndAntSpan>
              ) : null;
            })}
        </SynAndAntListContainer>
        <hr />
      </MainSynAndAntContainer>
    );
  }
}
