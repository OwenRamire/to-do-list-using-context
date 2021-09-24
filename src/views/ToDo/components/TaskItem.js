import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors} from './Colors';

const TaskItem = () => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.contentTask}>
        <View style={styles.pointItem} />
        <Text style={styles.txtTask}>Task</Text>
      </View>
      <Image
        source={require('../../../img/circle.png')}
        style={styles.circleItem}
      />
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
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.white,
    borderRadius: 15,
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
});