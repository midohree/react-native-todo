import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, TouchableOpacity, Alert, Text } from 'react-native';

import WelcomePage from './WelcomePage';
import Header from './Header';
import InputForm from './InputForm';
import TaskList from './TaskList';
import TodoDetails from './TodoDetails';
import ModalContainer from './ModalContainer';
import { todoAction, todoSelector } from '../features/slice';

const Todos = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [isWelcomePage, setWelcomePage] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetTodo, setTargetTodo] = useState([]);

  const dispatch = useDispatch();
  const todoList = useSelector(todoSelector.all);
  const { addTodo, addDescription, deleteAllTodo } = todoAction;

  useEffect(() => {
    setTimeout(() => setWelcomePage(false), 3000);
  }, []);

  const createTodo = value => {
    if (!value) {
      Alert.alert('다시 시도해주세요😅', '입력칸이 비어있습니다.', [{ text: 'OK' }]);

      return;
    }

    const newTodo = {
      id: Math.random().toString(),
      task: value,
      description: '',
      isDone: false,
      isFavorite: false,
    };

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  const openModal = id => {
    const targetTodo = todoList.filter(todo => todo.id === id);

    setTargetTodo(targetTodo);
    setModalOpen(true);
  }

  const submitDetails = id => {
    const description = todoDesc;

    setModalOpen(!isModalOpen);
    dispatch(addDescription({id: id, description: description}));
    setTodoDesc('');
  }

  return (
    <>
      {isWelcomePage ?
        <WelcomePage />
      :
        <SafeAreaView style={styles.container}>
          <ModalContainer isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
            <TodoDetails 
              handleSubmit={submitDetails}
              todo={targetTodo}
              value={todoDesc}
              setValue={setTodoDesc}
            />
          </ModalContainer>
          <Header />
          <InputForm
            setValue={setInputValue}
            value={inputValue}
            handleOnPress={createTodo}
          />
          <TaskList
            handleLongPress={openModal}
          />
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => dispatch(deleteAllTodo())}>
            <Text style={styles.button}>DELETE ALL</Text>
          </TouchableOpacity>
        </SafeAreaView>
      }
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
  buttonWrapper: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DD4E41',
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Todos;
