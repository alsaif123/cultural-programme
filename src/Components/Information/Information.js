import React, { useState } from "react";
import "./Information.css";

const Information = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const { name, img, Id, Department, age, taka } = props.information;
  return (
    <div className="student__card">
      <img src={img} alt="" />
      <div className="student__information">
        <h1>Name : {name}</h1>

        <h3>ID : {Id}</h3>
        <h4>Department : {Department}</h4>
        <h4>Age : {age}</h4>
        <h4>
          Taka : {taka}
          <br />
          <button
            disabled={isClicked}
            onClick={() => {
              props.addStudent(props.information);
              setIsClicked(true);
            }}
            className="btn"
          >
            <i class="far fa-money-bill-alt"></i> {isClicked ? "✓Paid" : "Pay"}
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Information;
