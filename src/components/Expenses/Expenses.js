import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
