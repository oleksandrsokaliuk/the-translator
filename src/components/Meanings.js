import React from "react";
import {
  DefinitionExamples,
  DefinitionListItems,
  MeaningHeader,
  MeaningUL,
  PartOfSpeechHeader,
  ParticularMeaningContainer,
} from "../styles/Meanings.styles";

export default class Meanings extends React.Component {
  render() {
    return (
      <>
        {this.props.detailsWord?.meanings &&
          this.props.detailsWord?.meanings.map(
            ({ partOfSpeech, definitions }, index) => (
              <ParticularMeaningContainer key={index}>
                <PartOfSpeechHeader>{partOfSpeech}</PartOfSpeechHeader>
                <MeaningHeader>Meaning</MeaningHeader>
                <MeaningUL>
                  {definitions.map((element, index) => {
                    return element.definition ? (
                      <>
                        <DefinitionListItems key={index}>
                          {element.definition}
                        </DefinitionListItems>
                        {element.example && (
                          <DefinitionExamples>
                            {element.example}
                          </DefinitionExamples>
                        )}
                      </>
                    ) : null;
                  })}
                </MeaningUL>
              </ParticularMeaningContainer>
            )
          )}
      </>
    );
  }
}
