import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, TextInput, Button} from 'react-native';

const App = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);

  const addTodo = value => {
    if (!value) setError(true);

    setTodoList([
      ...todoList,
      {id: Math.random().toString(), textValue: value, isDone: false},
    ]);
  
    setValue('');
  };

  const toggleTodo = id => {
    const newTodo = todoList.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodoList(newTodo);

    console.log(todoList);
  };

  const deleteTodo = () => {
    const filteredTodo = todoList.filter(todo => !todo.isDone);

    setTodoList(filteredTodo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Todo List</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <Button
        title='Add'
        onPress={() => addTodo(value)}
      />
      {todoList.map(todo => {
        return (
          <Text onPress={() => toggleTodo(todo.id)} key={todo.id} style={{ color: todo.isDone ? 'red' : 'black' }}>{todo.textValue}</Text>
        )
      })}
      <Button
        title='Delete Done'
        onPress={() => deleteTodo()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderBottomColor: '#037DFE',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 1,
    width: '80%',
  }
});

export default App;
