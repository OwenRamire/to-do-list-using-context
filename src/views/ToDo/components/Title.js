import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({titleSection}) => {
  return <Text style={styles.titleSec}>{titleSection}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  titleSec: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
