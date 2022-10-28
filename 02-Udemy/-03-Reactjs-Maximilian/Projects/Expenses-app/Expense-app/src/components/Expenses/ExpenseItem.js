import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//COMPONENT;
const ExpenseItem = (props) => {
  // The Component Rendered;
  return (
    <li>
      <Card className="expense-item">
        {/* THE DATA COMPO  */}
        <ExpenseDate date={props.date} />
        {/* --------------  */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
