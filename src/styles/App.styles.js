import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0 25%;
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
  font-size: 2.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
export const WordTranscrContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
