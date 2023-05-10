import Expenseitem from "./Expenseitem";
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css";
import { useState } from "react";
import Expensechart from "./expenseschart";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2023")
  function choosenValue(enteredYear) {
    setYear(enteredYear)

  }
  const filteredexpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let datastring = <p style={{color:'white',textAlign :'center' ,fontFamily:'revert-layer',fontSize:30}}>NO EXPENSES FOUND </p>
  if (filteredexpenses.length > 0) {
    datastring = (filteredexpenses.map((EnterdDataInNewExpense) => (
      <Expenseitem
        key={EnterdDataInNewExpense.id}
        title={EnterdDataInNewExpense.title}
        amount={EnterdDataInNewExpense.amount}
        date={EnterdDataInNewExpense.date} />)))

  }

  return (
    <div className="Expenses">
      <ExpenseFilter YearValue={choosenValue} selected={filteredYear}/>
        <Expensechart expenses={filteredexpenses}/>
        {datastring}
    </div>


  );

}

export default Expenses