import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export const PlayButton = styled.button`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: absolute;
  top: 15%;
  right: 0;
  color: ${(props) => (props.disabled ? "gray" : "#a442ee")};
  background-color: ${(props) =>
    props.disabled ? "white" : "rgb(164, 66, 238, 0.2)"};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 768px) {
    right: 10%;
  } */
`;

export const PlayIcon = styled(FaPlay)`
  font-size: 1.7em;
`;
