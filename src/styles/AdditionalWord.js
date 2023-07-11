import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

export const AdditionalWordContainer = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  height: 50vh;
  width: 45vw;
  padding: 5%;
  background-color: #ebd6fa;
  border: 1px solid black;
  display: ${(props) => (props.visible ? "block" : "none")};
  border: 1px solid #a442ee;
  overflow: scroll;
  border-radius: 5%;
  box-shadow: 0px 5px #a442ee;
  transition: all 1s ease;
  ::-webkit-scrollbar {
    width: 0;
  }
  @media (min-width: 768px) {
    height: 80vh;
    min-width: 100%;
    padding-top: 20%;
  }
  @media (max-width: 985px) {
    height: 80vh;
    min-width: 100%;
    padding-top: 20%;
  }
`;

export const CloseDiv = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

export const CloseIcon = styled(GrClose)`
  font-size: 1.7em;
`;
