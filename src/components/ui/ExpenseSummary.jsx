// /components/ui/ExpenseSummary.js
export default function ExpenseSummary({ expenses }) {
    const totalBalance = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
    return (
      <div>
        <h3>Total Balance: ₹{totalBalance}</h3>
      </div>
    );
  }
  