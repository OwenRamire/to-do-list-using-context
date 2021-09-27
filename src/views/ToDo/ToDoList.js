import React, {useContext} from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './components/Colors';
import TaskContext from '../../context/TaskContext';
import TaskContainer from './components/TaskContainer';
import EmptyTaskList from './components/EmptyTaskList';
import AddNewTask from './components/AddNewTask';

const ToDoList = () => {
  const {tasks, doneTasks} = useContext(TaskContext);

  const displayEmptyOrContainerTaskList = () => {
    if (tasks?.length) {
      return <TaskContainer tasksToDo={tasks} titleSect="Today's tasks" />;
    } else {
      return <EmptyTaskList />;
    }
  };

  const displayEmptyOrContainerTaskListDone = () => {
    if (doneTasks?.length) {
      return <TaskContainer doneTasks={doneTasks} titleSect="Done tasks" />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.containerScroll}>
        {displayEmptyOrContainerTaskList()}
        {displayEmptyOrContainerTaskListDone()}
      </ScrollView>
      <AddNewTask />
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  containerScroll: {
    paddingHorizontal: 20,
    paddingVertical: 45,
  },
});
