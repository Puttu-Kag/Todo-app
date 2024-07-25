import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    const completedTask = {
      ...tasks[taskIndex],
      completedAt: new Date().toLocaleString(),
    };
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} completed />
    </div>
  );
};

export default App;
