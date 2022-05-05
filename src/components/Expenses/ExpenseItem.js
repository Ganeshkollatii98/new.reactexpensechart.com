import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const expenseDate = props.expense.date;
  const expensePrice = props.expense.amount;
  const [expenseName, setExpenseName] = useState(props.expense.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseName}</h2>
          <div className="expense-item__price">{expensePrice}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
