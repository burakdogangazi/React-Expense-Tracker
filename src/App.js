import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  { id:1,title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id:2,title: "Toilet Paper", amount: 94.67, date: new Date(2021, 4, 21) },
  { id:3,title: "TV", amount: 300.21, date: new Date(2021, 6, 14) },
  { id:4,title: "Laptop", amount: 421.32, date: new Date(2021, 8, 12) },
];

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {

      // setExpenses([expense,...expenses])

      setExpenses((prevExpenses)=>{
        return [expense,...prevExpenses]
      })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
