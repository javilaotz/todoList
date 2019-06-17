import * as actionTypes from './actionTypes';

const initialState = {
  todos: {
    isFetched: false,
    entries: []
  },
  filter: 'all'
};

export default (state = initialState, action) => {
  //Este es el reductor
  switch (action.type) {
    case actionTypes.APPLY_FILTER:
      return { ...state, filter: action.payload };

    case actionTypes.UPDATE_TODO_REQUEST:
      return state;
    case actionTypes.UPDATE_TODO_FAILURE:
      return { ...state, todos: { isFetched: true, error: action.payload } };
    case actionTypes.UPDATE_TODO_SUCCESS:
      //return {...state, todos:{...state.todos, entries: [...state.todos.entries, action.payload]}}
      const todos = state.todos.entries.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      return { ...state, todos: { ...state.todos, entries: todos } };

    case actionTypes.ADD_TODO_REQUEST:
      return state;
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          entries: [...state.todos.entries, action.payload]
        }
      };
    case actionTypes.ADD_TODO_FAILURE:
      return state;

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
