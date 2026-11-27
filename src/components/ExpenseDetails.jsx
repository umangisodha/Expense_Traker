import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ExpenseDetails.css'

function ExpenseDetails(){
     const {id} =useParams();
    const [expense, setExpense] =useState(null);
      
    useEffect(() =>{
        const expense = JSON.parse(localStorage.getItem('expenses')|| '[]');
        const savedExpenses =expense.find((item) => String(item.id) === id);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setExpense(savedExpenses || null);
    },[id] );
   return(
   <>
               <div className="expense-details">
                 <h1>Expense Details</h1>

                 <div className="details-card">
                    <p><strong>Amount:</strong> {expense?.amount}</p>
                    <p><strong>Description:</strong> {expense?.description}</p>
                    <p><storng>Date:</storng> {expense?.date}</p>
                    <p><storng>Category:</storng> {expense?.category}</p>
                 </div>
               </div>
   </>)

}

export default ExpenseDetails;





