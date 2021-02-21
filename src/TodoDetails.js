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
      {todo.length && (
        <>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.task}</Text>
            <Text>{item.isDone ? 'Done' : ''}</Text>
          </View>
          <TextInput
            onChangeText={(text) => setValue(text)}
            value={value}
            placeholder='상세 설명을 적어주세요.'
          />
          <Star isMarked={item.hasStar} onPress={handleStar} id={item.id} />
        </>
      )}
      <Text>중요도 선택</Text>
      <Pressable
        style={styles.button}
        onPress={() => handleSubmit(item.id)}>
        <Text style={styles.buttonText}>수정하기</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    borderBottomColor: '#037DFE',
    borderBottomWidth: 1,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#037DFE',
    paddingHorizontal: 80,
    paddingVertical: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
  }
});

export default TodoDetails;
