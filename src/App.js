
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpenses/newExpense";
import { useState } from 'react';
const DUMMY_EXPENSES = [{
  id: 'a1',
  title: 'shoe expenses',
  amount: 23.7,
  date: new Date(2021, 2, 26)
},
{
  id: 'a2',
  title: 'a expenses',
  amount: 23.6,
  date: new Date(2022, 3, 26)
},
{
  id: 'a3',
  title: 'b expenses',
  amount: 23.1,
  date: new Date(2022, 3, 26)
},
{
  id: 'a4',
  title: 'c expenses',
  amount: 2.1,
  date: new Date(2021, 3, 26)
}]

function App() {
  const [entereddata, setEntereddata] = useState(DUMMY_EXPENSES)
  function saved(enterdDataInNewExpense) {
    setEntereddata((prevexpenses) => {
      return ([enterdDataInNewExpense, ...prevexpenses])
    })
  }


  return (
    <div >
      <NewExpense onPass={saved} />
      <Expenses item={entereddata}></Expenses>
    </div>
  );
}

export default App;
