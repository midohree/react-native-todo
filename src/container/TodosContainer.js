import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todos from '../components/Todos';
import { addTodo, toggleTodo, deleteAllTodo, deleteTodo, markFavorite, addDescription } from '../features/todo.actions';

function TodosContainer() {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  const onCreate = value => dispatch(addTodo(value));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const onDelete = useCallback(id => dispatch(deleteTodo(id)), [dispatch]);
  const onDeleteAll = () => dispatch(deleteAllTodo());
  const onFavorite = useCallback(id => dispatch(markFavorite(id)), [dispatch]);
  const onEditDesc = useCallback((id, value) => dispatch(addDescription(id, value)), [dispatch]);

  return (
    <Todos
      todoList={todoList}
      onCreate={onCreate}
      onToggle={onToggle}
      onDelete={onDelete}
      onDeleteAll={onDeleteAll}
      onFavorite={onFavorite}
      onEditDesc={onEditDesc}
    />
  );
}

export default TodosContainer;
