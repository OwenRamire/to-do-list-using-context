import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import TaskItem from './TaskItem';

const TaskContainer = () => {
  return (
    <View>
      <Title titleSection="Today's tasks" />
      <>
        <TaskItem />
      </>
    </View>
  );
};

export default TaskContainer;
