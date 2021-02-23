import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Alert, Text } from 'react-native';

import WelcomePage from './WelcomePage';
import Header from './Header';
import InputForm from './InputForm';
import TaskList from './TaskList';
import TodoDetails from './TodoDetails';
import ModalContainer from './ModalContainer';

const Todos = ({
  todoList,
  onCreate,
  onToggle,
  onDelete,
  onDeleteAll,
  onStar,
  onEditDesc,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [isWelcomePage, setWelcomePage] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetTodo, setTargetTodo] = useState([]);

  useEffect(() => {
    setTimeout(() => setWelcomePage(false), 3000);
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
    };

    onCreate(newTodo);
    setInputValue('');
  };

  const openModal = id => {
    const targetTodo = todoList.filter(todo => todo.id === id);

    setTargetTodo(targetTodo);
    setModalOpen(true);
  }

  const submitDetails = id => {
    setModalOpen(!isModalOpen);
    onEditDesc(id, todoDesc);
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
              handleStar={onStar}
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
            handleOnPress={onToggle}
            handleDelete={onDelete}
            handleModal={setModalOpen}
            handleLongPress={openModal}
            handleStar={onStar}
          />
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => onDeleteAll()}>
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
  }
});

export default Todos;
