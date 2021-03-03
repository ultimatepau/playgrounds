import React from 'react';
import themeMount from '../../utils/themeMount';
import Textfield from '../index';

jest.mock('react-router-dom');
jest.mock('../component');
jest.mock('../styles');

describe('Textfield', () => {
  it('renders correctly', () => {
    const [styleSheets, component] = themeMount(<Textfield />);
    expect(styleSheets.toString()).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
});