
import "./Expenseform.css"
import { useState } from "react"
function Expenseform(props) {
    const[enteredtitle,setEnteredtitle]=useState("")
    function titlechangehandler(event) {
        setEnteredtitle(event.target.value)
    }
    const[enteredamount,setEnteredamount]=useState("")
    function amountchangehandler(event) {
        setEnteredamount(event.target.value)
    }
    const[entereddate,setEntereddate]=useState("")
    function datechangehandler(event) {
        setEntereddate(event.target.value)
    }
    
function submithandler(event) {
    event.preventDefault();
    const expensedata={
        title: enteredtitle,
        amount: enteredamount,
       date: new Date(entereddate)
    }
    props.onSaveExpenseData(expensedata)
    setEnteredtitle('')
    setEnteredamount('')
    setEntereddate('')
    
    
}

    return (
        <form onSubmit={submithandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">  
                <label >Title</label>
                <input type="text" onChange={titlechangehandler}  value={enteredtitle}/>
                </div>
                <div className="new-expense__control" >  
                <label >Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountchangehandler} value={enteredamount}/>
                </div>
                <div className="new-expense__control" >  
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={datechangehandler} value={entereddate} />
                </div>
                <div className=".new-expense__actions">
                    <button type="submit">Submit</button>
                </div>
               


            </div>
        </form>




    )

}
export default Expenseform