import React, { useState } from "react";
import { MdPerson, MdVpnKey } from "react-icons/md";

const DashBoardContainer = () => {

  const setEditable = event => {
    const id = event.target.id;
    const user = this.state.allUsers.filter(users => users.id == id);
    console.log(user);
    this.setState({ mode: "edit", selectedUser: user });
  };

  return (
    <div>
      DashBoardContainer

    </div>
  );
};

export default DashBoardContainer;
