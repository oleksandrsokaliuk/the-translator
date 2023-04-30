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
      <SearchBarContainer>
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
