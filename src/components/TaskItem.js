import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Star from './Star';
import Badge from './Badge';

Icon.loadFont();

const TaskItem = ({ item, onPress, onLongPress, onFavorite, onPressDelete }) => {
  return (
    <TouchableHighlight
      onPress={() => onPress(item.id)}
      onLongPress={() => onLongPress(item.id)}
      style={[styles.todo, {opacity: item.isDone ? 0.5 : 1}]}
      underlayColor="#fff">
      <>
        <View style={styles.contentHead}>
          <View style={styles.icons}>
            <Text style={styles.title}>{item.task}</Text>
            <Badge isCompleted={item.isDone} />
            <Star isMarked={item.isFavorite} onPress={onFavorite} id={item.id} />
          </View>
          <Icon name="delete" size={20} color="#DD4E41" onPress={() => onPressDelete(item.id)} />
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  todo: {
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
    padding: 10,
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
    marginRight: 10,
  },
  description: {
    opacity: 0.4,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default TaskItem;
