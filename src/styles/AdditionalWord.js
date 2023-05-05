import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const AdditionalWordContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  height: 50vh;
  width: 50vw;
  padding: 5%;
  background-color: white;
  border: 1px solid black;
  display: ${(props) => (props.visible ? "block" : "none")};
  overflow: scroll;
  border-radius: 5%;
  box-shadow: 5px 10px rgb(0, 0, 0, 0.8);
  ::-webkit-scrollbar {
    width: 0;
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
