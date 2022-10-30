import React from "react";
import NewExpense from "./NewExpense";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div>
      <h1>Let's get started!</h1>
      
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
