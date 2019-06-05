import React from 'react';
import { shallow } from 'enzyme';
import { ListGroupItem } from 'reactstrap';

import TodoItem from './todoItem';
import { exportAllDeclaration } from '@babel/types';

//esto es un caso
it('runs', () => {
  expect(true).toBe(true);
});

//component test
it('renders TodoItems', () => {
  const subject = shallow(
    <TodoItem
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

  expect(subject.find(ListGroupItem)).toHaveLength(2);
});

it('triggers update on listItem click', () => {
  const id = 'id';
  const update = jest.fn();
  const subject = shallow(
    <TodoItem
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

  subject.find(ListGroupItem).simulate('click');

  expect(update).toHaveBeenCalledTimes(1);
  expect(update).toHaveBeenCalledWith(id);
});

//
it('renders items marked as `done` ', () => {
  const subject = shallow(
    <TodoItem
      itemList={[
        {
          id: 'id',
          desc: 'desc',
          done: true
        }
      ]}
    />
  );

  const className = subject.find(ListGroupItem).prop('className');
  expect(className).toBe('done');
});
