import React, { Component } from "react";

import CardContainer from "../components/CardContainer";
import SignContainer from "./SignContainer";
import DashBoardContainer from "./DashBoardContainer";


class MainContainer extends Component {
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
      mode: "dashboard",
      email: "",
      password: ""
    };
  }

  manageView = (view) =>{
    this.setState({ mode:view });
  }

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
    const id = event.target.id;
    const user = this.state.allUsers.filter(users => users.id == id);
    console.log(user);
    this.setState({ mode: "edit", selectedUser: user });
  };
  render() {
    switch (this.state.mode) {
      case "login":
        return (
          <SignContainer manageView={this.manageView}/>
        );

      case "dashboard":
        return (
          <div>
            <DashBoardContainer/>
          </div>
        );
      case "edit":
        return <div />;
    }
  }
}

export default MainContainer;
