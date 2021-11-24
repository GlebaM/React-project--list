import React, { useState, useRef } from "react";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    } else setIsValid(true);

    props.onAddGoal(enteredValue);
    setEnteredValue("");
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles[`form-control`]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          ref={inputRef}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
