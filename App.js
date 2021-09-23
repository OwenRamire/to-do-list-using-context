import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>To do List</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6EC',
  },
  title: {
    fontSize: 25,
  },
});

export default App;
