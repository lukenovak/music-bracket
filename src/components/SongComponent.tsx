import * as React from "react";
import {Song} from "../models/models";
import {YoutubeAudioPlayer} from "./YoutubeAudioPlayer";

export interface SongProps {
  song: Song
}

// display a song
export class SongComponent extends React.Component<SongProps> {
  render() {
    return (
      <div style={{backgroundColor: "#7a7a7a", margin: "10px", padding: "5px"}}>
        <p>{this.props.song.name}</p>
        <YoutubeAudioPlayer videoId={this.props.song.youtubeId}/>
      </div>
    )
  }
}
