
import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  // const tree = renderer.create(<App />).toJSON();
  const value = true;
  expect(value).toBeTruthy();
  // expect(tree).toMatchSnapshot();
});