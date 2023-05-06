import styled from "styled-components";

export const JokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a442ee;
  border-radius: 40%;
  width: 50%;
  padding: 5%;
  cursor: pointer;
`;

export const ShowJokeButton = styled.button`
  width: 80%;
  height: 5%;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: inherit;
`;

export const JokeText = styled.p`
  font-style: italic;
`;
