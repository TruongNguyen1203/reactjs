import React, { useState, Fragment } from "react";
import AddUser from "../src/components/Users/AddUser"
import UserList from "../src/components/Users/UserList"

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (name, age) => {
      setUsers( (prev) => {
        return [...prev, {userName: name, age: age}]
      })
  }
  return (
    <Fragment>
      <AddUser onAddUser ={handleAddUser} />
      <UserList users ={users}/>
    </Fragment>
  );
}

export default App;
