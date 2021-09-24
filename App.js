import React from 'react';
import ToDoList from './src/views/ToDo/ToDoList';
import TaskProvider from './src/context/TaskProvider';

const App = () => {
  return (
    <TaskProvider>
      <ToDoList />
    </TaskProvider>
  );
};

export default App;
