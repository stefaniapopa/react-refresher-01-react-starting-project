import React from "react";
import './NewGoal.css';

const NewGoal = props => {
    const addGoalHabndler = event => {
        event.preventDeafault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new goal'
        };

        props.onAddGoal(newGoal);
    };

    return <form className="new-goal" onSubmit={addGoalHabndler}>
        <input type='text' />
        <button type="submit">Add Goal</button>
    </form>
};


export default NewGoal;