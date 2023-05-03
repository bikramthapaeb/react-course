import React, { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [FilteredYear, setSelectedYear] = useState(2020);
  const selectYear = selectedYear =>{
    setSelectedYear(selectedYear);
 
  }
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
      <Card className="expenses">
      <ExpensesFilter selected = { FilteredYear } onSelectFilter = { selectYear } />
      
      { 
        filteredExpenses.map(expenses => (
        <ExpenseItem 
          key= {expenses.id}
          title={ expenses.title } 
          date={ expenses.date } 
          price={ expenses.amount }
        />
        ))
        
      }
      

        {/* <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          price={props.items[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          price={props.items[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          price={props.items[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          price={props.items[3].amount}
        ></ExpenseItem> */}
      </Card>
  );
}
export default Expenses;
