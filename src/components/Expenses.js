import React from "react";
import NewExpense from "./NewExpense";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {

  // const [filteredYear,setFilteredYear] = useState('2020')

  // const filterChangeHandler = (selectedYear) =>{
  //   setFilteredYear(selectedYear);
  // }

  // const filteredExpenses = props.items.filter(expense=>{
  //   return expense.date.getFullYear().toString() ===filteredYear;
  // })

  return (
    <div>
      <h1>Let's get started!</h1>
      {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> :"Expenses found" } */}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <ExpensesChart expenses = {filteredExpense}/>
    </div>
  );
}

export default Expenses;
