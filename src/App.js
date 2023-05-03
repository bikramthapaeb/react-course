import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
const [expenses, addNewExpense] = useState(dummyExpense);

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "let's get started"), 
  //   React.cloneElement(Expenses, { items: expenses })
  // );
  // console.log(expenses);
  const onSaveExpenseDataHandler = expense =>{
    addNewExpense(prevExpense => {
      return [ expense, ...prevExpense];
    });
  }
  return (
    <div>
      <NewExpense onSaveExpenseData = { onSaveExpenseDataHandler } />
      <Expenses items={ expenses }></Expenses>
    </div>
  );
}

export default App;
