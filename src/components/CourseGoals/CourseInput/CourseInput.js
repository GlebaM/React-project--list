import React, { useState } from "react";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    else setIsValid(false);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    } else setIsValid(true);

    props.onAddGoal(enteredValue);
    // event.target.querySelector("input").value = "";
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FomControl invalid={!isValid}> */}
      {/* <div className={`form-control ${!isValid && "invalid"}`}> */}
      <div
        className={`${styles[`form-control`]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
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

// import styled from "styled-components";
// const FomControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) =>
//       props.invalid ? "rgba(219, 27, 27, 0.801)" : "rgba(53, 51, 51, 0.883)"};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid
//       ${(props) => (props.invalid ? "rgba(219, 27, 27, 0.801)" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
