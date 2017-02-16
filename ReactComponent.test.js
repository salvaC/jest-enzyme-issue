'use strict';

import React from 'react';
import { mount } from 'enzyme';

import ReactComponent from './ReactComponent';

jest.mock('react-dom');
beforeEach(() => jest.resetModules());

test('initial component state', () => {
  const wrapper = mount(
    <ReactComponent/>
  );

  expect(wrapper.state()).toBe(null);
});