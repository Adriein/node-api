import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const CardContainer = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} id={user.id} className="col-4">
          <Card user={user} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
