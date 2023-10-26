import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an API request to fetch the list of users
    fetch("your_api_endpoint_here")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users: ", error));
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
                // Assuming the user object has a "name" property
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
