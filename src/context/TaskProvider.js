import React, {useState} from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = newTask => setTasks([...tasks, newTask.toLowerCase()]);

  const deleteTask = positionTask => {
    const updatedTaskList = [...tasks];
    updatedTaskList.splice(positionTask, 1);
    setTasks(updatedTaskList);
  };

  return (
    <TaskContext.Provider value={{tasks, addNewTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
