import React, { useState, useEffect } from "react";

import TableContainer from "./TableContainer";


const DashBoardContainer = () => {
  //Component state

  const [avatar, setAvatar] = useState("");
  const [users, setUsers] = useState([]);

  //Component didMount

  useEffect(() => {
    actions.getUsers();
  }, []);

  //Component functions

  const actions = {
    getUsers: async () => {
      //Fetch users to api and retrive a Promise
      const response = await fetch("/api/users");

      //Transform this promise in json format
      const users = await response.json();

      //Set state with the array of users
      setUsers(users);
    }
  };
  //get all users from db
  //get specified user from db
  //delete user from client
  //edit users and save the result to db
  //create a new user and save it to db

  const setEditable = event => {
    const id = event.target.id;
    const user = this.state.allUsers.filter(users => users.id == id);
    console.log(user);
    this.setState({ mode: "edit", selectedUser: user });
  };

  return (
    <div className="row min-vh-100">
      <div className="col-2">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <span>img</span>
              <div>ivan m fit</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">Users</div>
        </div>
        <div className="row">
          <div className="col-12">Notifications</div>
        </div>
      </div>
      <div className="col-10">
        <TableContainer users={users} />
      </div>
    </div>
  );
};

export default DashBoardContainer;
