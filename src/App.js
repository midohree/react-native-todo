import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

import WelcomePage from './WelcomePage';
import Header from './Header';
import InputForm from './InputForm';
import TaskList from './TaskList';
import TodoDetails from './TodoDetails';
import ModalContainer from './ModalContainer';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isWelcomePage, setWelcomePage] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetTodo, setTargetTodo] = useState([]);
  const [todoDesc, setTodoDesc] = useState('');

  useEffect(() => {
    setTimeout(() => setWelcomePage(false), 5000);
  }, []);

  const addTodo = value => {
    if (!value) {
      Alert.alert('다시 시도해주세요😅', '입력칸이 비어있습니다.', [{ text: 'OK' }]);

      return;
    }

    const newTodo = {
      id: Math.random().toString(),
      task: value,
      description: '',
      isDone: false,
      hasStar: false,
    }

    setTodoList([ ...todoList, newTodo ]);
    setInputValue('');
  };

  const toggleTodo = id => {
    const newTodo = todoList.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodoList(newTodo);
  };

  const deleteTodo = () => {
    const filteredTodo = todoList.filter(todo => !todo.isDone);

    setTodoList(filteredTodo);
  };

  const openModal = id => {
    const targetTodo = todoList.filter(todo => {
      return todo.id === id;
    });

    setTargetTodo(targetTodo);
    setModalOpen(true);
  }

  const markStar = id => {
    const newTodo = todoList.map(todo => {
      if (todo.id === id) {
        todo.hasStar = !todo.hasStar;
      }
      return todo;
    });

    setTodoList(newTodo);
  };

  const submitDetails = id => {
    setModalOpen(!isModalOpen);

    const newTodo = todoList.map(todo => {
      if (todo.id === id) {
        todo.description = todoDesc;
      }
      return todo;
    });

    setTodoList(newTodo);
    setTodoDesc('');
  }

  return (
    <>
      {isWelcomePage ? (
        <WelcomePage />
      ) : (
        <SafeAreaView style={styles.container}>
          <ModalContainer isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
            <TodoDetails 
              handleSubmit={submitDetails}
              handleStar={markStar}
              todo={targetTodo}
              value={todoDesc}
              setValue={setTodoDesc}
            />
          </ModalContainer>
          <Header />
          <InputForm
            setValue={setInputValue}
            value={inputValue}
            handleOnPress={addTodo}
          />
          <TaskList
            todoList={todoList}
            handleOnPress={toggleTodo}
            handleModal={setModalOpen}
            handleLongPress={openModal}
            handleStar={markStar}
          />
          <Button title="Delete Done" onPress={() => deleteTodo()} />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
  },
});

export default App;
