import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { todoSelector } from '../features/slice';
import TaskItem from './TaskItem';

Icon.loadFont();

const TaskList = ({ handleLongPress }) => {
  const todoList = useSelector(todoSelector.all);

  const renderItem = ({ item }) => {
    return (
      <TaskItem item={item} onLongPress={handleLongPress} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={todoList}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '60%',
    padding: 20,
  },
});

export default TaskList;
