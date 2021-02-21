import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todos from '../Todos';
import { addTodo, toggleTodo, deleteTodo, markStar, addDescription } from '../features/todo.actions';

function TodosContainer() {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  console.log(todoList, 'todos in Container');

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const onDelete = useCallback(todoList => dispatch(deleteTodo(todoList)), [dispatch]);
  const onStar = useCallback(id => dispatch(markStar(id)), [dispatch]);
  const onEditDesc = useCallback((id, value) => dispatch(addDescription(id, value)), [dispatch]);

  return (
    <Todos
      todoList={todoList}
      onCreate={onCreate}
      onToggle={onToggle}
      onDelete={onDelete}
      onStar={onStar}
      onEditDesc={onEditDesc}
    />
  );
}

export default TodosContainer;