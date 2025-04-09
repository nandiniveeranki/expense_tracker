'use client';
import { useEffect, useState } from "react";

export default function ExpenseList({ refreshTrigger }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const res = await fetch("/api/expenses");
      const data = await res.json();
      setExpenses(data);
    }

    fetchExpenses();
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/expenses/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setExpenses((prev) => prev.filter((expense) => expense._id !== id));
    } else {
      alert("❌ Failed to delete expense");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2 style={{ textAlign: "center", color: "#4a148c" }}>📋 Your Expenses</h2>
      {expenses.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>No expenses yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {expenses.map((expense) => (
            <li
              key={expense._id}
              style={{
                background: "#f3e5f5",
                margin: "1rem 0",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{expense.title}</strong> - ₹{expense.amount} ({expense.category})
              </div>
              <button
                onClick={() => handleDelete(expense._id)}
                style={{
                  backgroundColor: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.4rem 0.8rem",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
