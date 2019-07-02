import React, { Component } from "react";

class Card extends Component {
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
              <p>Name: {this.props.user.first_name}</p>
              <p>Last name: {this.props.user.last_name}</p>
              <p>Sex: {this.props.user.sex === 0 ? "male" : "female"}</p>
              <p>
                Active: {this.props.user.user_status === 1 ? "true" : "false"}
              </p>
              <p>Rol: {this.props.user.rol === 1 ? "admin" : "user"}</p>
            </div>
            <div className="col-2">
              <span id={this.props.user.id} onClick={this.props.setEditable}>X</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
