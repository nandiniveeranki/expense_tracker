'use client';
import { useState } from "react";

export default function ExpenseForm({ onExpenseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("✅ Expense added!");
      setFormData({ title: "", amount: "", category: "" });

      if (typeof onExpenseAdded === "function") onExpenseAdded();
    } else {
      setMessage("❌ Failed to add expense");
    }
  };

  const inputStyle = {
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  };

  return (
    <div style={{
      padding: "1rem",
      maxWidth: "400px",
      margin: "2rem auto",
      backgroundColor: "#fdf6ff",
      borderRadius: "1rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "#6a1b9a" }}>💸 Add Expense</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="amount"
          placeholder="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={{
          backgroundColor: "#8e24aa",
          color: "#fff",
          border: "none",
          padding: "0.75rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem"
        }}>➕ Add</button>
      </form>

      <p style={{
        textAlign: "center",
        color: message.includes("❌") ? "crimson" : "#2e7d32",
        marginTop: "1rem"
      }}>
        {message}
      </p>
    </div>
  );
}
