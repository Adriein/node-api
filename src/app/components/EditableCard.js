import React, { Component } from "react";

class EditableCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          {this.props.user.first_name
            .concat(" ")
            .concat(this.props.user.last_name)}
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-10" />
          </div>
        </div>
      </div>
    );
  }
}

export default EditableCard;
