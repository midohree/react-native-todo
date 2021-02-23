import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Star from './Star';

Icon.loadFont();

const TaskList = ({ todoList, handleOnPress, handleLongPress, handleStar, handleDelete }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todoList.map((todo) => {
        return (
          <TouchableHighlight
            onPress={() => handleOnPress(todo.id)}
            onLongPress={() => handleLongPress(todo.id)}
            key={todo.id}
            style={[ styles.todo, { opacity: todo.isDone ? 0.5 : 1 }]}
            underlayColor='#fff'
          >
            <>
              <View style={styles.contentHead}>
                <Text style={styles.title}>{todo.task}</Text>
                <Star isMarked={todo.hasStar} onPress={handleStar} id={todo.id} />
                <Icon name='delete' size={20} color='#DD4E41' onPress={() => handleDelete(todo.id)}/>
              </View>
              <Text style={styles.description}>{todo.description}</Text>
            </>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.8,
    height: '60%',
  },
  todo: {
    height: 70,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 10,
  },
  contentHead: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  badge: {
    marginLeft: 20,
    backgroundColor: 'green',
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: '#fff',
  },
  description: {
    opacity: 0.4,
  }
});

export default TaskList;
