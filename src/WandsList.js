import React, { Component } from "react";
import WandCard from "./WandCard";

class WandsList extends Component {
  render() {
    let wandCards = this.props.wands.map(wand => {
      return <WandCard wand={wand} />;
    });

    return (
      <div className="Wands">
        <h3>Wands</h3>
        <div className="row">{wandCards}</div>
      </div>
    );
  }
}

export default WandsList;
