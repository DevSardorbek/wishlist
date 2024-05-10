import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";

function Users(data) {
  const dispatch = useDispatch();
  return (
    <div className="users__wrapper">
      {data?.data?.map((e) => (
        <div key={e.id} className="users__card">
          <img src={e.gender === "male" ? male : female} alt="" />
          <h2>{e.name}</h2>
          <p>{e.profession}</p>
          <p>{e.age} years old</p>
          <button onClick={() => dispatch(removeFromUsers(e))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
