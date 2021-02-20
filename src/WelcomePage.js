import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>
      <Icon name="calendar" size={30} color='#fff' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#037DFE',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

export default WelcomePage;
