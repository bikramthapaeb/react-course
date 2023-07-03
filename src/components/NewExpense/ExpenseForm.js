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
    function TitleChangeHandler (event){
        // method one 
        setEnteredTitle(event.target.value);
        // method two
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // alternative of method two
        // setUserInput((prevState) =>{
        //     return({...prevState, enteredTitle: event.target.value });
        // });
        // console.log(event.target.value);
    }
    function AmountChangeHandler (event){
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    function DateChangeHandler (event){
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    // shared handler function
    // const inputChangeHandler = (identifier, value) =>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }else if(identifier === 'date'){
    //         setEnteredDate(value);
    //     }else{
    //         setEnteredAmount(value);
    //     }
    // }
   
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
           amount: +enteredAmount, 
           date: new Date(enteredDate), 
        };
        props.onSubmitExpense(expenseData);
        // console.log(expenseData);
         // Tow way binding
          // clearing input field to initial state

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const [showForm, setShowForm ] = useState(false);
    const formVisible =() =>{
        setShowForm(true);
    }
    const formHidden =() =>{
        setShowForm(false);
    }
    const AddExpenseForm = <form onSubmit={ submitHandler }>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text"  value={ enteredTitle } onChange={TitleChangeHandler}/>
             {/* shared handler event
            <input type="text"  value={ enteredTitle } onChange={(event)=> inputChnageHandler('title',event.target.value)}/>
           */}
        </div>
        <div className="new-expense__control">
            <label>Amout</label>
            <input type="number" min="0.01" step="0.01" value={ enteredAmount } onChange={AmountChangeHandler}/>
            {/* shared handler event
            <input type="text"  value={ enteredTitle } onChange={(event)=> inputChnageHandler('amount',event.target.value)}/>
           */}
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date"  min="2022/01/01" max="2023/01/01"  value={ enteredDate } onChange={DateChangeHandler}/>
            {/* shared handler event
            <input type="text"  value={ enteredTitle } onChange={(event)=> inputChnageHandler('date',event.target.value)}/>
           */}
        </div>

    </div>
    <div className="new-expense__actions">
        <button type="submit" onClick= {formHidden }>cancel</button>
        <button type="submit">Add Expense</button>
    </div>
</form>;
const AddExpenseButton = <button onClick={formVisible}>Add New Expenses</button>
    return(
        <div>
            {showForm ? AddExpenseForm : AddExpenseButton}
        </div>
    );
}
export default ExpenseForm;