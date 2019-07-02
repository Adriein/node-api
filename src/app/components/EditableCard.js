import React, { Component } from "react";

import Input from  './Input';

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
            <div className="col-10">
            <Input
                type={"text"}
                name={"first_name"}
                class={"form-control"}
                placeholder={"Name"}
              />
            </div>
            <div className="col-2">
              <span>
                X
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditableCard;
