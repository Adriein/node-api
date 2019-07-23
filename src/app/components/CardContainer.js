import React, { Component } from "react";

import Card from "./Card";

class CardContainer extends Component {
  constructor(){
    super();
    this.state = {
      allUsers: []
    }
  }
  componentDidMount(){
    this.getUsers();

    
  }

  getUsers = async event => {
    try {
      console.log("llama a endpount users");
      const res = await fetch("/api/users");
      const users = await res.json();
      console.log(users);
      this.setState({ allUsers: users });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return this.state.allUsers.map(user => {
      return (
        <div key={user.id} id={user.id} className="col-4">
          <Card
            user={user}
            setEditable={this.props.setEditable}
          />
        </div>
      );
    });
  }
}

export default CardContainer;
