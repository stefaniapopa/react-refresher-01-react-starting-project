import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text:'Finish the Course'},
    {id: 'cg2', text:'Learn all about the Cours Main Topic'}
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals)
  }

  return <div className='course-goals'>
    <h2>Cours Goals</h2>
    <NewGoal onAddGoal = {addNewGoalHandler} />
    <GoalList goals = {courseGoals} />
  </div>
};

export default App;
