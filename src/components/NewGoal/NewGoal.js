import React, {useState} from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setenteredText] = useState('')

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setenteredText('');

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = event => {
      setenteredText(event.target.value);
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
