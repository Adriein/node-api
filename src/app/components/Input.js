import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        className={this.props.class}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default Input;
