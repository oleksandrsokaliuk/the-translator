import styled from "styled-components";
import { motion } from "framer-motion";

export const MemeImg = styled(motion.img)`
  height: 50%;
  border-radius: 10%;
  margin-bottom: 50px;
  box-shadow: 0px 0px 10px black;
  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const WordNotFoundHeader = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  background-image: linear-gradient(to left, #ff00ff, #c585f3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const WordNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
