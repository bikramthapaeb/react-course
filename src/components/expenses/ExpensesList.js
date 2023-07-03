import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList =  props => {
    if(props.expenseItem.length=== 0){
        return <h2 className="expenses-list__fallback"> Found no Expenses. </h2>;
    }

    return  (
    <ul className="expenses-list">
    {props.expenseItem.map((expenses) => (
        <ExpenseItem 
        key= {expenses.id}
        title={ expenses.title } 
        date={ expenses.date } 
        price={ expenses.amount }
        />
        ))  }
    </ul>
    )
}
export default ExpensesList;