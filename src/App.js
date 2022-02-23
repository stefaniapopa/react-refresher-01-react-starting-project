import React from 'react';
import './App.css';
import GoalList from './components/GoalList';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text:'Finish the Course'},
    {id: 'cg2', text:'Learn all about the Cours Main Topic'}
  ];

  return <div className='course-goals'>
    <h2>Cours Goals</h2>
    <GoalList goals = {courseGoals} />
  </div>
};

export default App;
