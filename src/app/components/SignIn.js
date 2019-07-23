import React from 'react';
import { MdPerson, MdVpnKey} from 'react-icons/md';

const SignIn = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <div className="card">
          <div className="card-header text-center">
            App Login
          </div>
          <div className="card-body">
            <div className="input-group card-text m-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <MdPerson />
                </div>
              </div>
              <input
                type="text"
                name="email"
                className={`form-control ${props.isValid}`}
                id="inlineFormInputGroupUsername"
                placeholder="Email"
                onChange={props.handleChange}
              />
            </div>
            <div className="input-group card-text m-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <MdVpnKey />
                </div>
              </div>
              <input
                type="text"
                name="password"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="enter your password"
                onChange={props.handleChange}
              />
            </div>
            <div className="row justify-content-center">
              <button
                type="submit"
                className="btn btn-outline-secondary m-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default SignIn;