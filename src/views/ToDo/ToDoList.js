import React, {useContext} from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './components/Colors';
import TaskContext from '../../context/TaskContext';
import TaskContainer from './components/TaskContainer';
import EmptyTaskList from './components/EmptyTaskList';
import AddNewTask from './components/AddNewTask';

const ToDoList = () => {
  const {tasks} = useContext(TaskContext);

  const displayEmptyOrContainerTaskList = () => {
    if (tasks?.length) {
      return <TaskContainer tasksToDo={tasks} />;
    } else {
      return <EmptyTaskList />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.containerScroll}>
        {displayEmptyOrContainerTaskList()}
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
