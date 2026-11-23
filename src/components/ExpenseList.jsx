
import { useEffect, useState } from 'react';
import '../styles/ExpenseList.css'
import ConformationModel from './ConformationModel';
import EditModel from './EditModel';


export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);
    const [deleteExpense, setDeleteExpense] = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [editId, setEditId] = useState(null);


    const loadExpenses = () => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
        setExpenses(savedExpenses);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadExpenses();
    }, []);
    const totalAmount = expenses.reduce(
        (sum, item) => sum + Number(item.amount),
        0
    );

    //Delete expense
    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(
            (item) => item.id !== id
        );

        localStorage.setItem(
            "expenses",
            JSON.stringify(updatedExpenses)
        );

        setExpenses(updatedExpenses);
        setDeleteExpense(null);
    }
    const editHandler=(id) => {
        setEditId(id);
        setOpenModel(true);
    };

    return (
        <>
            <div className='ExpenseList'>
                <div className='list-search'>
                    <div>
                        <h1>Your expenses</h1>
                        <p className="list-help">
                            Search,edit, or remove an expense below.
                        </p>
                    </div>

                    <div>
                        <select>
                            <option>All categories</option>
                            <option>Food</option>
                            <option>Travel</option>
                            <option>Shopping</option>
                            <option>Entertainment</option>
                        </select>

                        <input
                            type="search"
                            placeholder="Search expenses..."
                        />
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {expenses.length > 0 ? (expenses.map((expense) => (<>
                            <tr key={expense.id}>
                                <td>{expense.amount}</td>
                                <td>{expense.description}</td>
                                <td>{expense.date}</td>
                                <td>{expense.category}</td>


                                <td className="button">
                                    <button type="button"
                                        className="btn-delete" onClick={() => setDeleteExpense(expense)}>
                                        Delete
                                    </button>

                                     
                                    <button className="btn-edit" onClick={()=>editHandler(expense.id)}>Edit</button>
                                    <button className="btn-readmore">View</button>
                                </td>
                            </tr></>))) : (<>
                                <tr>

                                </tr>


                            </>)

                        }

                        <tr className="expense-total">
                            <td colspan="7">TOtal Amount :{totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Delete Confiramation Model */}
            {deleteExpense != null &&
                (<ConformationModel
                    title="Delete Expense"
                    message={"Are you want to delete this expense "}
                    confirmText="Delete"
                    cancelText="Cancel"
                    onCancel={() => setDeleteExpense(null)}
                    onConfirm={() => handleDelete(deleteExpense.id)}

                />
                )}
               {openModel&&editId!==null&&( <EditModel/>)}
        </>
    );
}