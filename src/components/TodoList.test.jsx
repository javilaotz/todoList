import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

//Caso 1: Renderiza Módulo TodoItem
it('renders Todos', () => {
  const subject = shallow(
    <TodoList
      itemList={[
        {
          id: 'id',
          desc: 'desc',
          done: false
        },
        {
          id: 'id2',
          desc: 'desc2',
          done: false
        }
      ]}
    />
  );

  expect(subject.find(TodoItem)).toHaveLength(2);
});

//Caso 2:
it('triggers update', () => {
  const id = 'id';
  const update = jest.fn();
  const subject = shallow(
    <TodoList
      update={update}
      itemList={[
        {
          id,
          desc: 'desc',
          done: false
        }
      ]}
    />
  );

  subject.find(TodoItem).prop('update')();

  expect(update).toHaveBeenCalledTimes(1);
  expect(update).toHaveBeenCalledWith(id);
});
