import {Round} from "../models/models";
import * as React from "react";
import {MatchComponent} from "./MatchComponent";

export interface RoundProps {
  round: Round
}

// match of songs to compete
export class RoundComponent extends React.Component<RoundProps> {
  render() {
    return (
      <div style={{backgroundColor: "#ededed", margin: "10px", padding: "5px"}}>
        <h4>Round {this.props.round.number}</h4>
        {this.props.round.matches.map(match => <MatchComponent match={match}/>)}
      </div>
    )
  }
}
