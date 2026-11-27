
import { useEffect, useState } from "react";
import "../styles/EditModel.css";

function EditModel({ editId, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    id: editId,
    amount: "",
    description: "",
    date: "",
    category: "",
  });

  // Load selected expense
  useEffect(() => {
    const expenses = JSON.parse(
      localStorage.getItem("expenses") || "[]"
    );

    const expense = expenses.find(
      (item) => String(item.id) === String(editId)
    );

    if (expense) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        ...expense,
        amount: expense.amount ?? "",
        description: expense.description ?? "",
        date: expense.date ?? "",
        category: expense.category ?? "",
      });
    }
  }, [editId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value : value,
    }));
  };

  // Update expense
  const handleUpdate = (e) => {
    e.preventDefault();

    const expenses = JSON.parse(
      localStorage.getItem("expenses") || "[]"
    );

    const updatedExpenses = expenses.map((item) =>
      String(item.id) === String(editId)
        ? {
            ...formData,
            amount: Number(formData.amount),
          }
        : item
    );

    localStorage.setItem( "expenses",  JSON.stringify(updatedExpenses));
    
    
    onUpdate();
    onClose();
  };

  return (
    <div className="model">
      <div className="form-box">
        <form onSubmit={handleUpdate}>
          <h1>Edit Expense</h1>

          {/* Amount */}
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />

          {/* Description */}
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Category */}
          <label htmlFor="category">Category:</label>

          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="Transportation">  Transportation </option>
            <option value="education">Education</option>
            <option value="phoneBill">Phone Bill</option>
            <option value="entertainment">Entertainment</option>
          </select>

          {/* Buttons */}
          <div className="model-btn">
            <button type="submit" className="edit">
              Update
            </button>

            <button
              type="button"
              className="cancle"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModel;
