import React, {useState} from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = newTask => setTasks([...tasks, newTask.toLowerCase()]);

  return (
    <TaskContext.Provider value={{tasks, addNewTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
