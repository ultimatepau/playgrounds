import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import Component from '../component';
import Pencil from '../../../../Icons/src/Pencil';
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
  ].forEach(
    variant => {
      test(`should render variant ${variant}`, () => {
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
            variant,
          },
        };

        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);
        const tree = renderer
          .create(wrapper)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    }
  );

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
      test(`should render variant ${variant} disabled`, () => {
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
        const tree = renderer
          .create(wrapper)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    }
  );

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
      test(`should render variant ${variant} error`, () => {
        const props = {
          classes: {},
          input: {
            name: variant,
            onChange: () => { }
          },
          meta: {
            'icon-align': 'right',
            error: true,
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
        const tree = renderer
          .create(wrapper)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    }
  );

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
      test(`should render variant ${variant} with icon`, () => {
        const props = {
          classes: {},
          input: {
            name: variant,
            onChange: () => { }
          },
          meta: {
            helper: 'Helper Text',
            icon: Pencil,
            placeholder: 'Address',
            type: 'text',
            variant,
          },
        };

        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);
        const tree = renderer
          .create(wrapper)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    }
  );

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
      test(`should render variant ${variant} focused`, () => {
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

        const wrapper = shallow(
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>);

        const instance = wrapper.root().instance();
        const component = wrapper.shallow({ context: instance.getChildContext() });

        component.find('#wrapper').simulate('focus');
        expect(component.instance().state.active).toEqual(true);
      });
    }
  );

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
      test(`should render variant ${variant} clicked`, () => {
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
        wrapper.children().simulate('click');
      });
    }
  );


});