import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = (props) => {
  console.log("printing", props.filteredExpense);
  
  if (props.filteredExpense.length > 0) {
    return (
        <ul className="expenses-list">
         {
          props.filteredExpense.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))
         }
        </ul>
    );
  }
  else{
      return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }
  
};
export default ExpenseList;
