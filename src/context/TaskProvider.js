import React, {useState} from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTask] = useState([]);

  const addNewTask = newTask => setTasks([...tasks, newTask.toLowerCase()]);

  const finishTask = task => setDoneTask([...doneTasks, task]);

  const deleteTask = positionTask => {
    const updatedTaskList = [...tasks];
    updatedTaskList.splice(positionTask, 1);
    setTasks(updatedTaskList);
  };

  return (
    <TaskContext.Provider
      value={{tasks, doneTasks, addNewTask, finishTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
