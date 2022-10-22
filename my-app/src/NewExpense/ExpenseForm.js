import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  }

  const onSubmitExpense = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate)
    }
    
    props.onSaveExpense(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');


  }

  return (
    <form>
      <div className="expense-controls">
        <div className="expense-control">
          <label>Title</label>
          <input value={enterTitle} onChange={titleChangeHandler} type="text"></input>
        </div>
        <div className="expense-control">
          <label>Amount</label>
          <input value ={enterAmount} onChange={amountChangeHandler} type="number"></input>
        </div>
        <div className="expense-control">
          <label>Date</label>
          <input value ={enterDate} onChange={dateChangeHandler} type="date"></input>
        </div>
      </div>
      <div className="expense-button">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" onClick={onSubmitExpense}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
