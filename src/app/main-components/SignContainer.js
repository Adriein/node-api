import React, { useState } from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const SignContainer = props => {
  //Component state:

  const [isValid, setIsValid] = useState("");
  const [values, setValues] = useState("");
  const [isSignUp, setSign] = useState(true);

  //Component functions:

  const handleChange = event => {
    event.persist();

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    event.persist();

    const res = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const mode = await res.json();
    
    props.manageView(mode);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-3">
        {isSignUp ? (
          <SignIn
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isValid={isValid}
          />
        ) : (
          <SignUp
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isValid={isValid}
          />
        )}
      </div>
    </div>
  );
};

export default SignContainer;
