import React, { Component } from "react";

class WandCard extends Component {
  render() {
    const wand = this.props.wand;
    return (
      <div className="col-lg-4 col-md-6 col-12 mt-5">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={wand.imageUrl}
              alt={wand.core + " " + wand.wood}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{wand.core + " " + wand.wood}</span>
            </h5>
            <small className="card-text">{wand.length} wands</small>
          </div>
        </div>
      </div>
    );
  }
}

export default WandCard;
