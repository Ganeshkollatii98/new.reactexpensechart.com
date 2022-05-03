import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
    // const [title,setTitle]=useState('');
    // const [amount,setAmount]=useState('');
    // const [date,setDate]=useState('');
    // Using single state rather them three states
    const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })
    const titleHandler=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        setUserInput((prevState)=>{
            // console.log(prevState);
            return {
                ...prevState,
                enteredTitle:event.target.value
            }
        })
    }
    const amountHandler=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        setUserInput((prevState)=>{
            // console.log(prevState);
            return {
                ...prevState,
                enteredAmount:event.target.value
            }
        })
    }
    const dateHandler=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target,value
        // })
        setUserInput((prevState)=>{
            // console.log(prevState);
            return {
                ...prevState,
                enteredDate:event.target.value
            }
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        const expeseData={
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date:new Date(userInput.enteredDate)
        }
        console.log(expeseData);
        // clearing up input feilds
        props.onNewExpeseAdd(expeseData);
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        });
        
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" value={userInput.enteredDate} max="2025-01-01" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancelButton}>Cancel</button>
        <button type="submit" >Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
