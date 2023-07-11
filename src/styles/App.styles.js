import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1% 5%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 768px) {
    margin: 1% 25%;
  }
`;

export const Emoji = styled.span`
  font-size: 3.5rem;
  display: block;
  text-align: center;
`;
