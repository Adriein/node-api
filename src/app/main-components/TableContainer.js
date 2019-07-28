import React from "react";
import { FaTrashAlt, FaSearch, FaEdit, FaUserPlus } from "react-icons/fa"

const TableContainer = ({ users }) => {
  return (
    <div>
      <div className="row">
        <div className="col-1">
        <button className="prueba"><i><FaUserPlus/></i></button>
         
        </div>
        <div className="col-11">
          <div className="row">
            <div className="col-1">
              <FaSearch />
            </div>
            <div className="col-11">
              <input type="text" name="search" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Last payment</th>
              <th scope="col">Next payment</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <th key={user.id} id={user.id} scope="row">
                  {users.indexOf(user) + 1}
                </th>
                <td>{user.first_name.concat(" ").concat(user.last_name)}</td>
                <td>{user.user_status === 1 ? "active" : "inactive"}</td>
                <td />
                <td />
                <td>
                  <button>
                    <FaEdit />
                  </button>
                  <button>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
