import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Coffee', amount: 3.5, category: 'Food' },
    { id: 2, description: 'Groceries', amount: 45.0, category: 'Food' },
    { id: 3, description: 'Gas', amount: 30.0, category: 'Transport' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const visibleExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;
  

  return (
    <>
      <div className="mb-5">
        <ExpenseForm></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={
          (id) =>
            setExpenses(
              expenses.filter(expense => expense.id !== id
              ))
        } />
    </>
  );
}

export default App;