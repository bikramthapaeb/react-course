import React, { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expense = {filteredExpenses} />
        <ExpensesList expenseItem={ filteredExpenses } ></ExpensesList>
      </Card>
  );
}
export default Expenses;
