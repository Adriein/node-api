import React, { Component } from "react";

import Card from "./Card";
import EditableCard from "./EditableCard";

class CardContainer extends Component {
  render() {
    if (!this.props.editable) {
      return this.props.data.map(user => {
        return (
          <div key={user.id} id={user.id} className="col-4">
            <Card
              user={user}
              editable={this.props.editable}
              setEditable={this.props.setEditable}
            />
          </div>
        );
      });
    }
    else{
      return this.props.selectedUser.map(user => {
        return(
          <EditableCard user={user}/>
        );
      });
      
    }
  }
}

export default CardContainer;
