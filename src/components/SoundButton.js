import React from "react";
import { PlayButton, PlayIcon } from "../styles/SoundButton.styles";

export default class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSrc: "",
    };
    this.audioRef = React.createRef();
  }

  getSoundSrc(wordObj) {
    const [audioObj] = wordObj.phonetics.filter(
      (phonetic) => phonetic.audio !== ""
    );

    const audio = audioObj?.audio;
    this.setState((state) => {
      state.audioSrc = audio;
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newWord !== this.props.newWord) {
      this.getSoundSrc(this.props.newWord);
    }
  }
  render() {
    return (
      <div>
        {this.props.newWord && this.audioRef && (
          <>
            <audio
              src={this.state.audioSrc}
              type="audio/mp3"
              ref={this.audioRef}
            />
            <PlayButton
              onClick={() => {
                this.audioRef.current.play();
              }}
              disabled={!this.state.audioSrc}
            >
              <PlayIcon />
            </PlayButton>
          </>
        )}
      </div>
    );
  }
}
