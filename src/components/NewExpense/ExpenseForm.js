import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
 // updating  state 
    function TitleChangeHadler (event){
        // method one 
        setEnteredTitle(event.target.value);
        // method two
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // method three
        // setUserInput((prevState) =>{
        //     return({...prevState, enteredTitle: event.target.value });
        // });
        // console.log(event.target.value);
    }
    function AmountChangeHadler (event){
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    function DateChangeHadler (event){
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    // Tow way binding
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
           amount: enteredAmount, 
           date: new Date(enteredDate), 
        };
        props.onSubmitExpense(expenseData);
        // console.log(expenseData);
          // clearing input field to initial state
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"  value={ enteredTitle } onChange={TitleChangeHadler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amout</label>
                    <input type="number" min="0.01" step="0.01" value={ enteredAmount } onChange={AmountChangeHadler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2022/01/01" max="2023/01/01"  value={ enteredDate } onChange={DateChangeHadler}/>
                </div>

            </div>
            <div className="new-expense__actions">
               <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;