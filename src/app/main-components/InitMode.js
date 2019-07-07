import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Form from "../components/Form";
import CardContainer from "../components/CardContainer";

class InitMode extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="col-3">
            <Form
              add={this.props.addUser}
              handleChange={this.props.handleChange}
              value={this.props.state}
            />
          </div>
          <div className="col-9">
            <div className="row">
              <CardContainer
                value={this.props.state}
                handleChange={this.props.handleChange}
                setEditable={this.props.setEditable}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InitMode;
