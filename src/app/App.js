import React, { Component } from "react";

import Navigation from "./components/Navigation";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      rol: "2",
      sex: "",
      user_status: "1"
    };
  }
  addEmployee = async event => {
    try {
      event.preventDefault();
      event.persist();
      console.log(this.state)
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json"
        }
      });

      this.setState({ first_name: "", last_name: "", sex: "" });
      console.log("Guardado");

    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Form
          add={this.addEmployee}
          handleChange={this.handleChange}
          value={this.state}
        />
      </div>
    );
  }
}

export default App;
