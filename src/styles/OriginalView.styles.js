import styled from "styled-components";
import { motion } from "framer-motion";

export const OriginalViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
`;

export const OriginalViewHeader = styled(motion.h2)`
  font-size: 2.5em;
  color: black;
  @media (min-width: 768px) {
    font-size: 3em;
  }
  @media (max-width: 985px) {
    font-size: 3em;
  }
`;

export const TitleSpan = styled.span`
  color: rgb(164, 66, 238);
  font-size: inherit;
`;

export const OriginalViewDescription = styled(motion.p)`
  font-size: 1.2em;
  color: gray;
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
  @media (max-width: 985px) {
    font-size: 1.4em;
  }
`;
