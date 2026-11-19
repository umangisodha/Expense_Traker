
import { BiShoppingBag } from 'react-icons/bi';
import '../styles/ExpenseForm.css'
export default function ExpenseForm(){
    return(
    <div className="expenseform">
       <form>
       <h1>Expense Form</h1>
        
       <input
        type="number"
         name="amount"
         placeholder="Enter amount.."
        />

        <input
           type="text"
           name="description"
           placeholder="Enter Description.."
        />
        <input 
           type="date"
           name="date"
           placeholder="Enter Date.."
           />

           <label htmlFor="category">Category:</label>
           <select id="category"name="category"defaultValue="">
             <option value="">Select Category</option>
             <option value="food">Food</option>
             <option value="Shopping">Shopping</option>
             <option value="Transportation">Transportion</option>
             <option value="education">Education</option>
            <option value="phoneBill">Phone Bill</option>
            <option value="entertainment">Entertainment</option>
        </select>
        <div className="btn">
            <button type="button">Add Expense</button>
        </div>
         </form>
    </div>
    );
}