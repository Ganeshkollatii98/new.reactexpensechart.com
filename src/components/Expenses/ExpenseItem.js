import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const expenseDate = props.expense.date;
  const expenseName = props.expense.title;
  const expensePrice = props.expense.amount;

  return (
    <Card className="expense-item">
       <ExpenseDate date={expenseDate}/>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
