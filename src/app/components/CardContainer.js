import React, { Component } from "react";

import Card from "./Card";

class CardContainer extends Component {
  render() {
    return this.props.data.map(user => {
      return <div className='col-4'>
            <Card user={user} />
          </div>;
    });
  }
}

export default CardContainer;
