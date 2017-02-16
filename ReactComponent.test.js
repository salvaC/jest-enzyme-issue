'use strict';

import React from 'react';
import { mount } from 'enzyme';

import ReactComponent from './ReactComponent';

// ============================================== TEST =================================================================

test('initial component state', () => {
  const wrapper = mount(
    <ReactComponent/>
  );

  expect(wrapper.state()).toBe(null);
});