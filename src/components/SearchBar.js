import React from "react";
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarIcon,
} from "../styles/SearchBar.styles";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  render() {
    return (
      <SearchBarContainer
        initial={{ opacity: 0, backgroundColor: "transparent" }}
        transition={{ duration: 1, delay: 3 }}
        animate={{
          opacity: 1,
          backgroundColor: "rgba(255,255,255, 0.3)",
        }}
      >
        <SearchBarInput
          type="text"
          placeholder="Type a word..."
          onInput={this.props.onInputChange}
        />
        <SearchBarIcon />
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
