
import '../styles/ExpenseList.css'


export default function ExpenseList({expenses}){
    return(
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
                   {expenses.map((expense)=>(<> <tr>
                        <td>{expense.amount}</td>
                        <td>{expense.shooping}</td>
                        <td>{expense.date}</td>
                        <td>{expense.category}</td>
                        <td className="table-actions">
                           <button className="btn-delete">Delete</button>
                           <button className="btn-edit">Edit</button>
                           <button className="btn-readmore">View</button>
                        </td>
                    </tr></>))}

                    <tr className="expense-total">
                        <td colspan={5}>TOtal: ₹2,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}