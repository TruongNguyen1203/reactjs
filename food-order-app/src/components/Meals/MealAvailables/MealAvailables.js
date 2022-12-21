import React, { useContext, useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import classes from "./MealAvailables.module.css";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealAvailables = (props) => {


  return (
    <Card className={classes.container}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
          <li key={index}>
            <MealItem meal={meal}></MealItem>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default MealAvailables;
