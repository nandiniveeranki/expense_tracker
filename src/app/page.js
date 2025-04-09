'use client';
import { useState } from "react";
import ExpenseForm from "@/components/ui/ExpenseForm";
import ExpenseList from "@/components/ui/ExpenseList";

export default function HomePage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <main>
      <ExpenseForm onExpenseAdded={() => setRefresh((prev) => prev + 1)} />
      <ExpenseList refreshTrigger={refresh} />
    </main>
  );
}
