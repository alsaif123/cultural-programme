import React from "react";
import "./Header.css";

const Header = (props) => {
  const students = props.student;
  console.log(students);
  const totalCost = students.reduce(
    (total, students) => total + students.taka,
    0
  );
  console.log(totalCost);

  return (
    <div className="header">
      <h2>Cultural Programme - 2021</h2>
      <h4>Department of EEE</h4>
      <hr />

      <div className="description">
        <h2>
          Here are some student and they are going to arrage a Cultural
          Programme.Every student will provide some subscription for this
          programme.
        </h2>
        <p>Total Paid : {props.student.length}</p>
        <h4>Total Taka : {totalCost} TK </h4>
      </div>

      <hr />
      <div>
        <h3>Paid student list :</h3>
        {students.map((student, i) => (
          <p className="paid__list">
            <span>{(i = 1 + i++)}</span>
            {student.name} -- {student.taka}TK
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
