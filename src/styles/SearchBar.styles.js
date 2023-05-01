import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchBarContainer = styled.div`
  margin: 5vh auto;
  background: #f4f4f4;
  width: 100%;
  min-width: 200px;
  height: 8vh;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
`;
export const SearchBarInput = styled.input`
  width: 85%;
  height: 100%;
  background: transparent;
  font-size: 2rem;
  border: none;
  padding-left: 5%;
  outline: none;
`;
export const SearchBarIcon = styled(FaSearch)`
  width: 30px;
  height: 100%;
  color: #a442ee;
  padding-right: 5%;
`;
