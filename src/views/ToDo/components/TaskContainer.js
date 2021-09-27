import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title';
import TaskItem from './TaskItem';

const TaskContainer = ({titleSect, tasksToDo, doneTasks}) => {
  const displayAllTasks = myTasks => {
    return myTasks?.map((task, i) => {
      return (
        <TaskItem key={i.toString()} taskName={task} id={i} isDone={false} />
      );
    });
  };

  const displayDoneTasks = myTasks => {
    return myTasks?.map((task, i) => {
      return (
        <TaskItem key={i.toString()} taskName={task} id={i} isDone={true} />
      );
    });
  };

  return (
    <View style={styles.taskContainer}>
      <Title titleSection={titleSect} />
      <>{displayAllTasks(tasksToDo)}</>
      <>{displayDoneTasks(doneTasks)}</>
    </View>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 60,
  },
});
