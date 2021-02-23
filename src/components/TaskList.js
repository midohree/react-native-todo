import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import TaskItem from './TaskItem';

Icon.loadFont();

const TaskList = ({ todoList, handlePress, handleLongPress, handleFavorite, handleDelete }) => {
  const renderItem = ({ item }) => {
    return (
      <TaskItem
        item={item}
        onPress={handlePress}
        onLongPress={handleLongPress}
        onFavorite={handleFavorite}
        onPressDelete={handleDelete}
      />
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
  },
});

export default TaskList;
