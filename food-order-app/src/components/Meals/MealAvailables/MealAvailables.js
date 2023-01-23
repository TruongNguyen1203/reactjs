import React, { useState, useEffect } from "react";
import Card from "../../UI/Card/Card";
import classes from "./MealAvailables.module.css";
import MealItem from "./MealItem";

const MealAvailables = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-56668-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("data" + data);
      let loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes["is-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if(httpError){
    return (
      <section className={classes["error"]}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <Card className={classes.container}>
      <ul>
        {meals &&
          meals.length > 0 &&
          meals.map((meal, index) => (
            <li key={index}>
              <MealItem meal={meal}></MealItem>
            </li>
          ))}
      </ul>
    </Card>
  );
};
export default MealAvailables;
