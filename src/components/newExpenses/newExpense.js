
import Expenseform from "./Expenseform";
import "./newExpense.css"
function NewExpense(props) {
    function SavedData(EnteredData) {
        const ExpenseData = {
            ...EnteredData,
            id: (1000 * Math.random()).toString()
        }
        props.onPass(ExpenseData)


    }


    return (<div className="new-expense">
        <Expenseform onSaveExpenseData={SavedData} />
    </div>





    );


}
export default NewExpense