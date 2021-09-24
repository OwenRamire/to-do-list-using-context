import React, {useContext} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Colors} from './Colors';
import TaskContext from '../../../context/TaskContext';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({taskName, id}) => {
  const {deleteTask} = useContext(TaskContext);

  const handleEndTask = () => {
    Alert.alert('Are you sure?', 'Did you really finish the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const handleDeleteTask = () => {
    Alert.alert('Warning', 'Are you sure to delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => deleteTask(id),
      },
    ]);
  };

  return (
    <View style={styles.containerItem}>
      <View style={styles.contentTask}>
        <View style={styles.pointItem} />
        <Text style={styles.txtTask}>{taskName}</Text>
      </View>
      <View style={styles.btnsTaskItemContainer}>
        <FontAwesomeIcon
          name="check-circle"
          size={30}
          color={Colors.myGreen}
          style={styles.btnIcon}
          onPress={() => handleEndTask()}
        />
        <FontAwesomeIcon
          name="trash"
          size={30}
          color={Colors.myRed}
          style={styles.btnIcon}
          onPress={() => handleDeleteTask()}
        />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  contentTask: {
    display: 'flex',
    flexDirection: 'row',
  },
  pointItem: {
    width: 20,
    height: 20,
    marginRight: 15,
    backgroundColor: Colors.bluePoint,
    borderRadius: 5,
  },
  txtTask: {
    fontSize: 15,
  },
  circleItem: {
    width: 20,
    height: 20,
  },
  btnsTaskItemContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnIcon: {
    marginHorizontal: 15,
  },
});
