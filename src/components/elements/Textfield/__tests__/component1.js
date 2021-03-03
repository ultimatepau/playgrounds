import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import Component from '../component';
import theme from '../../styles/theme';

describe('Component', () => {
  const props = {
    classes: {},
    input: {
      name: 'test',
      onChange: () => { }
    },
    meta: {
      'icon-align': 'right',
      helper: 'Helper Text',
      placeholder: 'Address',
      type: 'text',
      variant: 'basic-filled',
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>);
    const tree = renderer
      .create(wrapper)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  [
    'basic-filled',
    'basic-line',
    'multiline-filled',
    'multiline-line',
    'area-filled',
    'area-line',
    null
  ].forEach(
    variant => {
      test(`should render variant ${variant} mouse enter`, () => {
        const props = {
          classes: {},
          input: {
            name: variant,
            onChange: () => { }
          },
          meta: {
            'icon-align': 'right',
            disabled: true,
            helper: 'Helper Text',
            normalize: jest.fn((value) => { return value; }),
            placeholder: 'Address',
            type: 'text',
            variant,
          },
        };

        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);


        wrapper.children().simulate('mouseenter');
        wrapper.children().instance()._handlerHover(true);

        expect(wrapper.children().instance().state.hover).toEqual(true);
      });
    }
  );
  [
    'basic-filled',
    'basic-line',
  ].forEach(
    variant => {
      test(`should render variant ${variant} input change`, () => {
        const props = {
          classes: {},
          input: {
            name: variant,
            onChange: () => { }
          },
          meta: {
            'icon-align': 'right',
            disabled: true,
            helper: 'Helper Text',
            placeholder: 'Address',
            type: 'text',
            variant,
          },
        };

        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);

        wrapper.children().find('input').simulate('change', { target: { value: 'Hello' } });
      });
    }
  );
  [
    'multiline-filled',
    'multiline-line',
    'area-filled',
    'area-line',
  ].forEach(
    variant => {
      test(`should render variant ${variant} input change`, () => {
        const props = {
          classes: {},
          input: {
            name: variant,
            onChange: () => { }
          },
          meta: {
            'icon-align': 'right',
            disabled: true,
            helper: 'Helper Text',
            normalize: jest.fn((value) => { return value; }),
            placeholder: 'Address',
            type: 'text',
            variant,
          },
        };
        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);
        wrapper.children().find('textarea').simulate('keyup', {
          which: `1\n2\n\n3\n\n\t4\n556666`
        });
      });
    }
  );
});