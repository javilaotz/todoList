import React from 'react';
import { shallow } from 'enzyme';
import { ListGroupItem } from 'reactstrap';

import TodoItem from './TodoItem';

describe('TodoItem', () => {
  //component test
  it('renders Todo', () => {
    const subject = shallow(
      <TodoItem
        item={{
          id: 'id',
          desc: 'desc',
          done: false
        }}
      />
    );

    expect(subject.find('span').text()).toBe('desc');
  });

  //
  it('updates todo', () => {
    const update = jest.fn();
    const subject = shallow(
      <TodoItem
        update={update}
        item={{
          id: 'id2',
          desc: 'desc2',
          done: false
        }}
      />
    );
    subject.find(ListGroupItem).simulate('click');

    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(/*nothing*/);
  });

  //
  it('renders items marked as `done` ', () => {
    const subject = shallow(
      <TodoItem
        item={{
          id: 'id',
          desc: 'desc',
          done: true
        }}
      />
    );

    const className = subject.find(ListGroupItem).prop('className');
    expect(className).toBe('done');
  });
});
