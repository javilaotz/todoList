import React from 'react';
import { shallow } from 'enzyme';

import TodoHeader from './Header';

//Caso 1: Está renderizando el título
it('renders title', () => {
  const subject = shallow(<TodoHeader title="titulo" />);
  expect(subject.text()).toBe('titulo');
});
