import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { fetchTodos, addTodo } from './components/Api';

import TodoList from './components/TodoList';
import TodoInput from './components/Input';

jest.mock('./components/Api', () => ({
  fetchTodos: jest.fn(),
  addTodo: jest.fn()
}));

const render = (props = {}) => shallow(<App {...props} />);

const mocks = {
  fetchTodos: {
    resolve: element =>
      fetchTodos.mockImplementation(() => Promise.resolve(element)),
    reject: element =>
      fetchTodos.mockImplementation(() => Promise.reject(element))
  },
  addTodo: {
    resolve: element =>
      addTodo.mockImplementation(() => Promise.resolve(element)),
    reject: element => addTodo.mockImplementation(() => Promise.reject(element))
  }
};

describe('App', () => {
  //Caso 1: verificar llamado a fetchTodos
  it('fetches todos on mount', () => {
    fetchTodos.mockImplementation(() => new Promise(() => {}));
    render();
    expect(fetchTodos).toHaveBeenCalledTimes(1);
    expect(fetchTodos).toHaveBeenCalledWith(/*nothing*/);
  });

  //Caso 2: Renderiza los fetchTodos que le envió
  it('renders fetched Todos', async () => {
    const todos = [
      {
        id: '7Q4t_QQGU',
        desc: 'Task 1',
        done: false
      },
      {
        id: '75t_GUQQ',
        desc: 'Task 2',
        done: false
      }
    ];
    mocks.fetchTodos.resolve(todos);
    const subject = await render();
    expect(subject.find(TodoList).prop('itemList')).toEqual(todos);
  });

  //Caso 2: Agrega elemento nuevo
  it('renders created item', async () => {
    const todos = [
      {
        id: 'id0',
        desc: 'Task 0',
        done: false
      }
    ];
    const newItem = {
      id: '7Q4t_QQGU',
      desc: 'Task 1',
      done: false
    };
    fetchTodos.mockImplementation(() => Promise.resolve(todos));
    addTodo.mockImplementation(() => Promise.resolve(newItem));
    //addTodo.mockImplementation(() =>  new Promise((resolve) => {setTimeout(() => resolve(newItem), 1000)}))
    /* Si retorna una promesa, espera a que se cumpla el segundo para cargar el valor, de lo contrario solo retornará el valor en el paso siguiente, el cual será [] ya que se resolverá un segundo después*/
    const subject = await render();
    await subject.find(TodoInput).simulate('submit', newItem);
    expect(subject.find(TodoList).prop('itemList')).toEqual([
      ...todos,
      newItem
    ]);
  });

  //Caso 3: revisar que se llamó addTodo con el valor enviado
  it('adds todo', async () => {
    const newItem = {
      id: '7Q4t_QQGU',
      desc: 'Task 1',
      done: false
    };
    mocks.fetchTodos.resolve([]);
    mocks.addTodo.resolve(newItem);
    const subject = await render();
    subject.find(TodoInput).simulate('submit', newItem);
    expect(addTodo).toHaveBeenCalledTimes(1);
    expect(addTodo).toHaveBeenCalledWith(newItem);
  });

  /*
    // Or using async/await.
    it('tests error with async/await', async () => {
      expect.assertions(1);
      try {
        await user.getUserName(1);
      } catch (e) {
        expect(e).toEqual({
          error: 'User with 1 not found.',
        });
      }
    });*/
});
