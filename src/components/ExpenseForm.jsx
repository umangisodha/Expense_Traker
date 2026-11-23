
import '../styles/ExpenseForm.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";

export default function ExpenseForm() {
const  navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
    });
    const [errors, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "amount" ? Number(value) : value,
        }));

    };

    const validation = () => {
        const newErrors = {};

        if (!formData.amount || formData.amount <= 0) {
            newErrors.amount = 'Enter an amount greater than 0';
        }
        if (!formData.description) { newErrors.description = 'Description is required'; }

        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        setError(newErrors);
        return Object.keys(newErrors).length=== 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validation()) return;

        
        const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
        const  newExpense ={ ...formData, id: uuidv4() };

        localStorage.setItem('expenses' ,JSON.stringify([...expenses,newExpense]));
        console.log("Expense Added Successfully",newExpense);
         navigate("/");   
    }
    return (
        <div className="expenseform">
            <form onSubmit={handleSubmit}>
                <h1>Expense Form</h1>

                <input
                    type="number"
                    name="amount"
                    placeholder="Enter amount.."
                    value={formData.amount || ""}
                    onChange={handleChange}
                />
                {errors.amount && <p className="validation">{errors.amount}</p>}

                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description.."
                    value={formData.description}
                    onChange={handleChange}
                />
                {errors.description && <p className="validation">
                    {errors.description}</p>}

               <input
                    type="date"
                    name="date"
                    placeholder="Enter Date.."
                    value={formData.date}
                    onChange={handleChange}
                />
                {errors.date && <p className="validation">{errors.date}</p>}

                <label htmlFor="category">Category:</label>
                <select id="category" name="category"
                    value={formData.category}
                    onChange={
                        handleChange}>
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportion</option>
                    <option value="education">Education</option>
                    <option value="phoneBill">Phone Bill</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                                {errors.category && <p className="validation">{errors.category}</p>}

                <div className="btn">
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    );
}