import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses"
function App() {

  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 4, 21) },
    { title: "TV", amount: 300.21, date: new Date(2021, 6, 14) },
    { title: "Laptop", amount: 421.32, date: new Date(2021, 8, 12) },
  ];

  const addExpenseHandler = expense =>{
    console.log(expense)
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
