import styled from "styled-components";

export const DefinitionListItems = styled.li`
  margin-top: 1%;
  &:before {
    content: "•";
    color: rgb(164, 66, 238);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const DefinitionExamples = styled.p`
  font-style: italic;
  margin-left: 5px;
  color: gray;
  font-size: 0.9rem;
`;

export const PartOfSpeechHeader = styled.h2`
  position: relative;
  overflow: hidden;
  text-transform: lowercase;
  font-style: italic;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 1px solid gray;
    margin-top: 0.6em;
    margin-left: 0.4em;
  }
`;

export const ParticularMeaningContainer = styled.div``;

export const MeaningHeader = styled.h3`
  color: gray;
`;

export const MeaningUL = styled.ul`
  list-style: none;
`;
