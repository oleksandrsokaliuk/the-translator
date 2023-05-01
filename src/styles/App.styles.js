import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1% 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 1% 25%;
  }
`;

export const WordNotFoundContainer = styled.div``;

export const WordNotFoundHeader = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const Emoji = styled.span`
  font-size: 3.5rem;
  display: block;
  text-align: center;
`;

export const WordHeader = styled.h1`
  font-size: 4em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1px;
  position: relative;
`;
export const WordTranscr = styled.h2`
  font-size: 2em;
  color: rgb(164, 66, 238, 0.5);
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
