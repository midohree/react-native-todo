import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Badge = ({ isCompleted }) => {
  return (
    <Text style={[styles.badge, { backgroundColor: isCompleted ? '#037DFE' : '#16B371' }]}>
      {isCompleted ? 'Completed' : 'Progress'}
    </Text>
  )
};

const styles = StyleSheet.create({
  badge: {
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: '#fff',
  },
});

export default Badge;
