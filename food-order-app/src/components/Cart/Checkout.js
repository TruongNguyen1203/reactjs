import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveCharacters = (value) => value.trim().length === 5;
const Checkout = (props) => {
  const [isFormInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const cancelHandler = () => {
    props.onCancelOrder();
  };
  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputPostalCodeRef = useRef();
  const inputCityRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredStreet = inputStreetRef.current.value;
    const enteredPostalCode = inputPostalCodeRef.current.value;
    const enteredCity = inputCityRef.current.value;

    const isEnteredNameValid = !isEmpty(enteredName);
    const isEnteredStreetValid = !isEmpty(enteredStreet);
    const isEnteredPostalCodeValid = isFiveCharacters(enteredPostalCode);
    const isEnteredCityValid = !isEmpty(enteredCity);

    setFormInputValid({
      name: isEnteredNameValid,
      street: isEnteredStreetValid,
      postalCode: isEnteredPostalCodeValid,
      city: isEnteredCityValid,
    });


    const formIsValid =
      isEnteredNameValid &&
      isEnteredStreetValid &&
      isEnteredPostalCodeValid &&
      isEnteredCityValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirmOrder({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    });
  };

  const nameClass = isFormInputValid.name ? "" : classes.invalid;
  const streetClass = isFormInputValid.street ? "" : classes.invalid;
  const postalCodeClass = isFormInputValid.postalCode ? "" : classes.invalid;
  const cityClass = isFormInputValid.city ? "" : classes.invalid;

  return (
    <form className={classes.container} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label>Your Name</label>
        <input type="text" ref={inputNameRef}></input>
        {!isFormInputValid.name && <p>Please enter valid name!</p>}
      </div>
      <div className={streetClass}>
        <label>Street</label>
        <input type="text" ref={inputStreetRef}></input>
        {!isFormInputValid.street && <p>Please enter valid street!</p>}
      </div>
      <div className={postalCodeClass}>
        <label>Postal code</label>
        <input type="text" ref={inputPostalCodeRef}></input>
        {!isFormInputValid.postalCode && (
          <p>Please enter valid postal code (5 characters)!</p>
        )}
      </div>
      <div className={cityClass}>
        <label>City</label>
        <input type="text" ref={inputCityRef}></input>
        {!isFormInputValid.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes["btn-container"]}>
        <button
          type="button"
          className={classes["btn-cancel"]}
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className={classes["btn-confirm"]}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
