import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyTaskList = () => {
  return (
    <View>
      <Text style={styles.emptyTaskListTitle}>No task to do</Text>
    </View>
  );
};

export default EmptyTaskList;

const styles = StyleSheet.create({
  emptyTaskListTitle: {
    fontSize: 24,
  },
});
