import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

;

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Coffee', amount: 3.5, category: 'Food' },
    { id: 2, description: 'Groceries', amount: 45.0, category: 'Food' },
    { id: 3, description: 'Gas', amount: 30.0, category: 'Transport' },
  ]);



  return (
    <ExpenseList
      expenses={expenses}
      onDelete={
        (id) =>
          setExpenses(
            expenses.filter(expense => expense.id !== id
            ))
      } />
  );
}

export default App;