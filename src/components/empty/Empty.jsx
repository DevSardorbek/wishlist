import React from "react";
import photo from "../../assets/1f937-2642.png";
import "./empty.css";

function Empty() {
  return (
    <div className="empty" style={{ textAlign: "center" }}>
      <img src={photo} width={250} alt="" />
      <h2>Empty</h2>
    </div>
  );
}

export default Empty;
