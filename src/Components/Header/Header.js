import React from "react";
import "./Header.css";

const Header = (props) => {
   const { students } = props.student;
 /*   const totalCost = students.reduce((total, students) =>
   (total + students.salary), 0);
  console.log(totalCost) */
 

  return (
    <div className="header">
      <h2>Cultural Programm - 2021</h2>
      <hr />
      <h1 className="description">
        Here are some student and they are going to arrage a Cultural
        Program.Every student will provide some subscription for this program.
      </h1>

      <hr />

      <p>Total Paid : {props.student.length}</p>
      <h4>Total Taka : {props.student.taka} </h4>
      <h3>Paid student list :

      </h3>
    </div>
  );
};

export default Header;
