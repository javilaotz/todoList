import * as actionTypes from './actionTypes';

const initialState = {
  todos: {
    isFetched: false
  },
  filter: 'all'
};

export default (state = initialState, action) => {
  //Este es el reductor
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          entries: [...state.todos.entries, action.payload]
        }
      };

    case actionTypes.UPDATE_TODO:
      const todos = state.todos.entries.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
      return { ...state, todos: { ...state.todos, entries: todos } };
    case actionTypes.APPLY_FILTER:
      return { ...state, filter: action.payload };

    case actionTypes.FETCH_TODOS_REQUEST:
      return { ...state, todos: { isFetched: false } };

    case actionTypes.FETCH_TODOS_FAILURE:
      return { ...state, todos: { isFetched: true, error: action.payload } };

    case actionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: { isFetched: true, entries: action.payload } };

    default:
      return state; //Siempre retorna state
  }
};
