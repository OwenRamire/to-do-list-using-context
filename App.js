import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './src/views/ToDo/ToDoList';

const App = () => {
  return (
      <ToDoList />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
