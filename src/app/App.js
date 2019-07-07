import React, { Component } from "react";

import InitMode from "./main-components/InitMode";
import EditMode from "./main-components/EditMode";

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      rol: "2",
      sex: "",
      user_status: "1",
      allUsers: [],
      selectedUser: null,
      mode: 'init'
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async event => {
    try {
      const res = await fetch("/api/users");
      const users = await res.json();
      this.setState({ allUsers: users });
    } catch (err) {
      console.log(err);
    }
  };
  addUser = async event => {
    try {
      event.preventDefault();
      event.persist();
      console.log(this.state);
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      this.getUser();
      this.setState({ first_name: "", last_name: "" });
      console.log("Guardado");
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  setEditable = event => {
    console.log("oki");
    const id = event.target.id;
    const user = this.state.allUsers.filter(users => users.id == id);
    console.log(user);
    this.setState({ mode: 'edit', selectedUser: user });
  };

  render() {
    if(this.state.mode === 'init'){
      return (
        <div className="container-fluid">
          <InitMode state={this.state} add={this.addUser} handleChange={this.handleChange} setEditable={this.setEditable}/>
        </div>
      );
    }else{
      return (
        <div className="container-fluid">
          <EditMode state={this.state} handleChange={this.handleChange}/>
        </div>
      );
    }   
  }
}

export default App;
