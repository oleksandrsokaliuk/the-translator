import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSrc: "",
    };
    this.audioRef = React.createRef();
  }

  getSoundSrc(wordObj) {
    const [{ audio }] = wordObj.phonetics.filter(
      (phonetic) => phonetic.audio !== ""
    );
    this.setState((state) => {
      state.audioSrc = audio;
    });
    console.log(!this.state.audioSrc);

    // console.log(audioObj.sound);
    console.log(this.audioRef.current);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newWord !== this.props.newWord) {
      this.getSoundSrc(this.props.newWord);
      console.log(this.state.audioSrc);
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
            <button
              onClick={() => {
                this.audioRef.current.play();
              }}
              disabled={!this.state.audioSrc}
            >
              Play
            </button>
          </>
        )}
      </div>
    );
  }
}
