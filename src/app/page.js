'use client';

import { useState } from "react";
import ExpenseForm from "@/components/ui/ExpenseForm";
import ExpenseList from "@/components/ui/ExpenseList";
import ExpenseSummary from "@/components/ui/ExpenseSummary"; // 👈 Import added

export default function HomePage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <main>
      <ExpenseForm onExpenseAdded={() => setRefresh((prev) => prev + 1)} />
      <ExpenseSummary refreshTrigger={refresh} /> {/* 👈 New Summary Component */}
      <ExpenseList refreshTrigger={refresh} />
    </main>
  );
}
