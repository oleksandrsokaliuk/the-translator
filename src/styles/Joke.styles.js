import styled from "styled-components";
import { motion } from "framer-motion";

export const JokeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(164, 66, 238, 0.5);
  margin-top: "15px";
  width: 80%;
  min-height: 200px;
  padding: 5%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40%;
`;

export const ShowJokeButton = styled(motion.h4)`
  width: 100%;
  font-size: 40px;
  background-color: transparent;
  border: none;
  cursor: inherit;
  text-shadow: 1px 1px 2px pink;
  color: white;
  text-align: center;
`;

export const JokeText = styled(motion.p)`
  font-style: italic;
  font-size: 18px;
  /* text-align: center; */
  color: white;
  width: 100%;
  white-space: pre-line;
  text-align: center;
`;
