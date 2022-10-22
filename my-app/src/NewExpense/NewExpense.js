import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdit, setEdit] = useState(false);

  const startEditingHandler = () => {
    setEdit(true);
  };

  const stopEditingHandler = () => {
    setEdit(false);
  };

  const saveExpenseHandler = (expenseData) => {
    const expense = {
        ...expenseData,
        id: Math.random().toString()
    };

    props.onAddExpense(expense);

    setEdit(false);
  }
  return (
    <div className="new-expense">
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEdit && <ExpenseForm onCancel={stopEditingHandler} onSaveExpense={saveExpenseHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
