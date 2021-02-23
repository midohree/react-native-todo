import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const Header = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    marginBottom : 16,
    marginLeft: 16,
  },
  title: {
    color: '#037DFE',
    fontSize: 32,
    fontWeight: '600',
  },
});

export default Header;
