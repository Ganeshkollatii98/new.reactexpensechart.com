import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // let array=[];
  // localStorage.setItem('expenseObject',JSON.stringify(array));

  // console.log();
  /* [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
 */

  const localStore=localStorage.getItem("expensesList");
  if (localStore==null) {
    localStorage.setItem("expensesList", JSON.stringify([])); 
  }
  else{
    localStorage.setItem("expensesList", localStore);
  }
  const [expensesList, setExpensesList] = useState(
    JSON.parse(localStorage.getItem("expensesList"))
  );
  

  var addExpenseItem = (expense) => {
    var newExpense = {
      id: Math.random().toString(),
      ...expense,
    };
    setExpensesList((prevExpenses) => {
      localStorage.clear();
      console.log("prev", prevExpenses);

      console.log("run run", [newExpense, ...prevExpenses]);
      localStorage.setItem(
        "expensesList",
        JSON.stringify([newExpense, ...prevExpenses])
      );
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense toAddExpenseItem={addExpenseItem} />
      <Expenses expenses={expensesList} />
    </div>
  );
}

export default App;
