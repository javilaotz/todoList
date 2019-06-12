import * as actionTypes from './actionTypes';
import * as api from './components/Api';

//Action creators
export const addTodo = todo => ({ type: actionTypes.ADD_TODO, payload: todo });
export const updateTodo = id => ({
  type: actionTypes.UPDATE_TODO,
  payload: id
});
export const applyFilter = opc => ({
  type: actionTypes.APPLY_FILTER,
  payload: opc
});

// thunks
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
