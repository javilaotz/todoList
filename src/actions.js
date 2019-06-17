import * as actionTypes from './actionTypes';
import * as api from './components/Api';

//Action creators
//export const addTodo = todo => ({ type: actionTypes.ADD_TODO, payload: todo });

/*export const updateTodo = id => ({
  type: actionTypes.UPDATE_TODO,
  payload: id
});*/
export const applyFilter = opc => ({
  type: actionTypes.APPLY_FILTER,
  payload: opc
});

// thunks
export const updateTodo = id => async dispatch => {
  dispatch({
    type: actionTypes.UPDATE_TODO_REQUEST
  });
  try {
    const item = await api.toggleTodo(id);
    dispatch({
      type: actionTypes.UPDATE_TODO_SUCCESS,
      payload: item
    });
  } catch (e) {
    dispatch({
      type: actionTypes.UPDATE_TODO_FAILURE,
      payload: e
    });
  }
};

export const addTodo = newTodo => async dispatch => {
  dispatch({
    type: actionTypes.ADD_TODO_REQUEST
  });
  try {
    const todo = await api.addTodo(newTodo);
    dispatch({
      type: actionTypes.ADD_TODO_SUCCESS,
      payload: todo
    });
  } catch (e) {
    dispatch({
      type: actionTypes.ADD_TODO_FAILURE,
      payload: e
    });
  }
};
export const fetchTodos = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_TODOS_REQUEST
  });
  try {
    const todos = await api.fetchTodos();
    dispatch({
      type: actionTypes.FETCH_TODOS_SUCCESS,
      payload: todos
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCH_TODOS_FAILURE,
      payload: e
    });
  }
};
