import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

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
  onStar,
  onEditDesc,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [isWelcomePage, setWelcomePage] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetTodo, setTargetTodo] = useState([]);

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
    };

    onCreate(newTodo);
    setInputValue('');
  };

  const openModal = id => {
    const targetTodo = todoList.filter(todo => {
      return todo.id === id;
    });

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
            handleModal={setModalOpen}
            handleLongPress={openModal}
            handleStar={onStar}
          />
          <Button title="Delete Done" onPress={() => onDelete()} />
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
  button: {
    backgroundColor: 'green',
  },
});

export default Todos;
