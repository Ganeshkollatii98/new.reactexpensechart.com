import './ExpenseDate.css';
function ExpenseDate(props) {
    const expenseDate=new Date(props.date);

  return (
    <div className="expense-date">
      <div className='expense-date__month'>{expenseDate.toLocaleString("en-us", { month: "long" })}</div>
      <div className='expense-date__year'>{expenseDate.getFullYear()}</div>
      <div className='expense-date__day'>{expenseDate.toLocaleString("en-us", { day: "2-digit" })}</div>
    </div>
  );
}

export default ExpenseDate;
