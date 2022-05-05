import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const getDropDownValue = (selectedValue) => {
    setFilteredYear(selectedValue);
  };
  let filteredExpenses='';
  if(props.expenses!==null)
  {
    filteredExpenses = props.expenses.filter(
      (expense) => new Date(expense.date).getFullYear().toString() === filteredYear
    );
  }
  


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          passFilterValue={getDropDownValue}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList filteredExpense={filteredExpenses} ></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
