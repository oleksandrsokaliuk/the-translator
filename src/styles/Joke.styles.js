import styled, { keyframes } from "styled-components";

const rollDown = keyframes`
`;

export const JokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.isJokeShown ? "#a442ee" : "rgb(164, 66, 238, 0.5)"};
  border-bottom: ${(props) =>
    props.isJokeShown ? "none" : "1rem solid rgb(164, 66, 238)"};
  margin-top: ${(props) => (props.isJokeShown ? "15px" : "0")};
  border-radius: ${(props) => (props.isJokeShown ? "1%" : "50%")};
  width: 70%;
  min-height: 50px;
  padding: 5%;
  cursor: pointer;
  overflow: hidden;
  &:active {
    border-bottom: none;
    min-height: 40px;
    margin-top: 15px;
  }
`;

export const ShowJokeButton = styled.h4`
  width: 100%;
  font-size: 40px;
  background-color: transparent;
  border: none;
  cursor: inherit;
  text-shadow: 1px 1px 2px pink;
  color: white;
  text-align: center;
`;

export const JokeText = styled.p`
  font-style: italic;
  font-size: 18px;
  text-align: center;
  width: 100%;
  white-space: pre-line;
  text-align: justify;
`;
