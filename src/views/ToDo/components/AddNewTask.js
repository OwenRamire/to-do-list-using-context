import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from './Colors';

const AddNewTask = () => {
  return (
    <View style={styles.containerAddTask}>
      <TextInput
        placeholder="Write a task"
        textAlign="center"
        style={styles.inputTask}
      />
      <TouchableOpacity style={styles.btnAddTask}>
        <Text style={styles.btnContAddTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewTask;

const styles = StyleSheet.create({
  containerAddTask: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputTask: {
    width: 290,
    height: 55,
    borderRadius: 55,
    backgroundColor: Colors.white,
    color: Colors.txtGray,
    fontSize: 15,
  },
  btnAddTask: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
  },
  btnContAddTask: {
    color: Colors.txtGray,
    fontSize: 40,
  },
});
