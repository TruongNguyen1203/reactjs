import "./styles/Expenses.css";
import Filter from "./Filter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import { useState } from "react";

const { default: Card } = require("../UI/Card");

const Expenses = (props) => {
  const currentYear = (new Date).getFullYear().toString()
  const [filterYear, setFilterYear] = useState(currentYear);
  
  const filterItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const handleChangeFilter = (selectedYear) => {
    setFilterYear(selectedYear);
  }
  return (
      <Card className="expenses">
        <Filter selectedYear ={filterYear} onChangeFilter={handleChangeFilter} />
        <ExpenseChart expenses={filterItems}/>
        <ExpenseList items={filterItems}/>

      </Card>
  );
};

export default Expenses;
