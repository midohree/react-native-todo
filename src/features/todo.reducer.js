import types from './todo.actionTypes';

const todoReducer = (state = [] , { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return state.concat(payload.newTodo);
    case types.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone} : todo
      );
    case types.DELETE_TODO: 
      return state.filter(todo => !todo.isDone);
    case types.MARK_STAR:
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo.hasStar = !todo.hasStar;
        }
        return todo;
      });
    case types.ADD_DESC:
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo.description = payload.description;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
