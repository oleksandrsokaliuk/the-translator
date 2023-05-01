export const changeWord = (event) => {
  if (event.target.value.length !== 0) {
    setTimeout(() => {
      this.setState({ inputWord: event.target.value });
    }, 1000);
  }
};
