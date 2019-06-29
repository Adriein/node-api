import React, { Component } from "react";

import Input from "./Input";

class Form extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div id="card-header" className="card-header">
              User Registration
            </div>
            <div id="form-container" className="card-body">
              <form onSubmit={this.props.add}>
                <div className="form-group">
                  <Input
                    type={"text"}
                    name={"first_name"}
                    class={"form-control"}
                    placeholder={"Name"}
                    value={this.props.value.first_name}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type={"text"}
                    name={"last_name"}
                    class={"form-control"}
                    placeholder={"Last name"}
                    value={this.props.value.last_name}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-check form-check-inline">
                    <Input
                      id={"male"}
                      type={"radio"}
                      name={"sex"}
                      class={"form-check-input"}
                      value={0}
                      handleChange={this.props.handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Input
                      id={"female"}
                      type={"radio"}
                      name={"sex"}
                      class={"form-check-input"}
                      value={1}
                      handleChange={this.props.handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <button
                    id="create-btn"
                    name="create"
                    type="submit"
                    className="btn btn-primary justify-content-end"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
