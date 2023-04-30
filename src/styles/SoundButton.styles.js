import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export const PlayButton = styled.button`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20%;
  right: 30%;
  color: ${(props) => (props.disabled ? "gray" : "#a442ee")};
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 10%;
  }
`;

export const PlayIcon = styled(FaPlay)`
  font-size: 1.5rem;
`;
