import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titleHandler = (e) => {
    // setUserInput({ ...userInput, enterdTitle: e.target.value });
    // setUserInput((prev) => { // the better;
    //   return { ...prev, enterdTitle: e.target.value };
    // });
    setEnteredTitle(e.target.value);
  };
  const amountHandler = (e) => {
    // setUserInput({ ...userInput, enterdAmount: e.target.value });
    // setUserInput((prev) => {
    //   return { ...prev, enterdAmount: e.target.value };
    // });
    setEnteredAmount(e.target.value);
  };
  const dateHandler = (e) => {
    // setUserInput({ ...userInput, enterdDate: e.target.value });
    // setUserInput((prev) => {
    //   return { ...prev, enterdDate: e.target.value };
    // });
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterdTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterdAmount}
            min="0.01"
            step=".01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-01"
            max="2022-12-31"
            value={enterdDate}
            onChange={dateHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
