import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './components/Colors';
import TaskContainer from './components/TaskContainer';
import AddNewTask from './components/AddNewTask';

const ToDoList = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.containerScroll}>
        <TaskContainer />
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 45,
    paddingBottom: 45,
  },
});
