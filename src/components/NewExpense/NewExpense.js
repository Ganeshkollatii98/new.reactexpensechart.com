import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isFormEnable, setFormEnable] = useState(false);
  var newExpenseItemToAdd = (expenseItem) => {
    props.toAddExpenseItem(expenseItem);
    handleAddExpenseButton();
  };
  var handleAddExpenseButton=()=>{
      
      if(isFormEnable){
          setFormEnable(false);
      }
      else{
          setFormEnable(true);
      }
  }
  return (
    <div className="new-expense">
      {isFormEnable ? (
        <ExpenseForm onNewExpeseAdd={newExpenseItemToAdd} onCancelButton={handleAddExpenseButton} />
      ) : (
        <button type="submit" onClick={handleAddExpenseButton}>Add New Expense</button>
      )}
    </div>
  );
}
export default NewExpense;
