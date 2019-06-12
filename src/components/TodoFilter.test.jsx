import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown, DropdownItem } from 'reactstrap';

import TodoFilter from './TodoFilter';

describe('describe', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(<TodoFilter />);
  });

  //Caso 1: Toggle
  it('change the state when toggle', () => {
    subject.find(Dropdown).prop('toggle')();
    expect(subject.find(Dropdown).prop('isOpen')).toBe(true);
  });

  //Caso 2: onFilter
  it('calls onfilter function', () => {
    const onFilter = jest.fn();
    subject.setProps({ onFilter });
    subject
      .find(DropdownItem)
      .at(2)
      .simulate('click');
    expect(onFilter).toHaveBeenCalledTimes(1);
    expect(onFilter).toHaveBeenCalledWith('uncompleted');
  });
});
