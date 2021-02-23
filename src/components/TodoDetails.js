import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import Star from './Star';

const TodoDetails = ({
  handleStar,
  handleSubmit,
  todo,
  value,
  setValue,
}) => {
  const [ item ] = todo;

  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.task}</Text>
        <Text>{item.isDone ? 'Done' : 'Progress'}</Text>
      </View>
      <TextInput
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder='상세 설명을 적어주세요.'
        style={styles.input}
      />
      <Star isMarked={item.hasStar} onPress={handleStar} id={item.id} />
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
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
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
  },
  buttonText: {
    color: '#fff',
  }
});

export default TodoDetails;
