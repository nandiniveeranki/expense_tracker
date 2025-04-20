"use client";
import { useEffect, useState } from "react";
import ExpenseForm from "@/components/ui/ExpenseForm";
import ExpenseList from "@/components/ui/ExpenseList";
import ExpenseSummary from "@/components/ui/ExpenseSummary";

export default function HomePage() {
  const [expenses, setExpenses] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch("/api/expenses");
        const data = await res.json();
        setExpenses(data);
      } catch (err) {
        console.error("Failed to fetch expenses", err);
      }
    };

    fetchExpenses();
  }, [refresh]);

  return (
    <main>
      <ExpenseForm onExpenseAdded={() => setRefresh((prev) => prev + 1)} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </main>
  );
}
