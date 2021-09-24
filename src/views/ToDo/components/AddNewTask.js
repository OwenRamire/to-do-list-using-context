import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Colors} from './Colors';

const AddNewTask = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerAddTask}>
      <TextInput
        placeholder="Write a task"
        textAlign="center"
        style={styles.inputTask}
      />
      <TouchableOpacity style={styles.btnAddTask}>
        <Text style={styles.btnContAddTask}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddNewTask;

const styles = StyleSheet.create({
  containerAddTask: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
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
