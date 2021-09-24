import React, {useState, useContext} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Colors} from './Colors';
import TaskContext from '../../../context/TaskContext';

const AddNewTask = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const {addNewTask} = useContext(TaskContext);

  const handleTaskInput = value => {
    setCurrentTask(value);
  };

  const handleAddTask = () => {
    addNewTask(currentTask);
    setCurrentTask(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerAddTask}>
      <TextInput
        placeholder="Write a task"
        textAlign="center"
        style={styles.inputTask}
        value={currentTask}
        onChangeText={value => handleTaskInput(value)}
      />
      <TouchableOpacity
        style={styles.btnAddTask}
        disabled={
          currentTask === null || currentTask.trim() === '' ? true : false
        }
        onPress={() => handleAddTask()}>
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
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btnAddTask: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btnContAddTask: {
    color: Colors.txtGray,
    fontSize: 40,
  },
});
