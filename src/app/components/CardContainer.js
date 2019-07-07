import React, { Component } from "react";

import Card from "./Card";

class CardContainer extends Component {
  render() {
    return this.props.value.allUsers.map(user => {
      return (
        <div key={user.id} id={user.id} className="col-4">
          <Card
            user={user}
            editable={this.props.value.editable}
            setEditable={this.props.setEditable}
          />
        </div>
      );
    });
  }
}

export default CardContainer;
