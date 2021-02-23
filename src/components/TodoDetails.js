import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import Star from './Star';
import Badge from './Badge';

const TodoDetails = ({
  handleFavorite,
  handleSubmit,
  todo,
  value,
  setValue,
}) => {
  const [ item ] = todo;

  return (
    <>
      <View style={styles.header}>
        <Badge isCompleted={item.isDone} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.task}</Text>
        <Star isMarked={item.isFavorite} onPress={handleFavorite} id={item.id} />
      </View>
      <TextInput
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder='상세 설명을 적어주세요.'
        style={styles.input}
      />
      <Pressable
        style={styles.button}
        onPress={() => handleSubmit(item.id)}>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    borderBottomColor: '#037DFE',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  header: {
    alignItems: 'flex-start',
  },
  input: {
    height: 40,
  },
  button: {
    backgroundColor: '#037DFE',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
  }
});

export default TodoDetails;
