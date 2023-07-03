import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props){
    const onSubmitHandler = (expenseEnteredData) =>{
        const expenseData = {
            ...expenseEnteredData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
    }
    return(
        <div className="new-expense">

            <ExpenseForm onSubmitExpense= { onSubmitHandler }/>
        </div>
    );
}
export default NewExpense;