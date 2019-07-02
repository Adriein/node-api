import React, { Component } from "react";

import Navigation from "./components/Navigation";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";

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
      editable: false,
      selectedUser: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async event => {
    try {
      const res = await fetch("/api/users");
      const users = await res.json();
      this.setState({allUsers: users});
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
      this.setState({ first_name: "", last_name: ""});
      console.log("Guardado");
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  setEditable = event => {
    const id = event.target.id;
    const user = this.state.allUsers.filter(users => users.id == id);
    this.setState({editable: true, selectedUser: user})
  }

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <div className="row">
          <div className="col-3">
            <Form
              add={this.addUser}
              handleChange={this.handleChange}
              value={this.state}
            />
          </div>
          <div className="col-9">
            <div className="row">
              <CardContainer data={this.state.allUsers} editable={this.state.editable} setEditable={this.setEditable} selectedUser= {this.state.selectedUser}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
