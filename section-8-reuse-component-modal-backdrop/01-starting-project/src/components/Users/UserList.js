import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>{user.userName} {user.age} {"years old"}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
