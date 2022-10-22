import ExpenseItem from "./ExpenseItem";
import './styles/ExpenseList.css'

const ExpenseList = (props) => {

    if(props.items.length == 0){
        return <h2>Found no expenses.</h2>
    }
  return (
    <ul className='expense-list'>
      {props.items.map((expense) => (
        <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
