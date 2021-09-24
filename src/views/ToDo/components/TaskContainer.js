import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title';
import TaskItem from './TaskItem';

const TaskContainer = ({tasksToDo}) => {
  const displayAllTasks = myTasks => {
    return myTasks?.map((task, i) => {
      return <TaskItem key={i.toString()} taskName={task} />;
    });
  };

  return (
    <View style={styles.taskContainer}>
      <Title titleSection="Today's tasks" />
      <>{displayAllTasks(tasksToDo)}</>
    </View>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 60,
  },
});
