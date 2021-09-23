import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './components/Colors';
import Title from './components/Title';

const ToDoList = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.containerScroll}>
        <Title titleSection="Today's tasks" />
        <Title titleSection="Done tasks" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerScroll: {
    backgroundColor: Colors.gray,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 45,
    paddingBottom: 45,
  },
});
