import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
/*----------IMPORTING ^--------------*/
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const expenseFilter = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        />
        <ExpensesChart expenses={expenseFilter} />
        <ExpenseList items={expenseFilter} />
      </Card>
    </div>
  );
};

export default Expenses;
