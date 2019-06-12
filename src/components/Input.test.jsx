import React from 'react';
import { shallow } from 'enzyme';
import { Input, Button } from 'reactstrap';

import TodoInput from './Input';
import TodoFilter from './TodoFilter';

describe('describe', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(<TodoInput />);
  });

  //Caso 5: handleChange
  it('updates the value', () => {
    const nextVal = 'nextVal';
    subject
      .find(Input)
      .simulate('change', { target: { name: 'todoItem', value: nextVal } });
    expect(subject.find(Input).prop('value')).toBe(nextVal); //check false positive
    expect(subject.state('todoItem')).toEqual(nextVal);
  });

  //Caso 6: handleSubmit
  it('submits the item, if the input has a value', () => {
    const onSubmit = jest.fn();

    subject.setProps({ onSubmit });
    subject.setState({ todoItem: 'some content' });

    const button = subject
      .find(Button)
      .first()
      .props();
    button.onClick({ preventDefault: () => null }); // jest.fn() instead null?
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not submits a item, the input does not have a value', () => {
    subject.setState({ todoItem: '' });
    subject
      .find(Button)
      .first()
      .simulate('click', { preventDefault: () => null });
    expect(subject.state('todoItem')).toEqual('');
    //subject.update()
  });

  //Caso 7: onFilter
  it('Sets the filter function', () => {
    const onFilter = jest.fn();
    subject.setProps({ onFilter });
    expect(subject.find(TodoFilter).prop('onFilter')).toBe(onFilter);
  });
});
