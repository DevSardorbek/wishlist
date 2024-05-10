import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsHeart } from "react-icons/bs";

function Navbar() {
  const users = useSelector((s) => s.users.value);
  const wishlist = useSelector((s) => s.wishlist.value);
  return (
    <div className="navbar">
      <div className="navbar_links">
        <h2>Redux Toolkit</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>
          All users <sup>{users.length}</sup>
        </NavLink>
      </div>
      <NavLink className="wishlist" to={"/wishlist"}>
        <BsHeart />
        <span>{wishlist.length}</span>
      </NavLink>
    </div>
  );
}

export default Navbar;
