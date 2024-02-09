import React from 'react';
import { Header } from './Components/Header/header';
import './Styles/global.css'
import { Tasks } from './Components/Tasks/Tasks';
import { TasksProvider } from './Context/tasksContext';

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
