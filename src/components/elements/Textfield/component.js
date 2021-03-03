import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@telkomdesign/tedis-reactjs-component/lib/Typography';

export default class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hover: false,
      inputSelection: false,
      value: this.props.meta ? this.props.meta.value : '',
      updateSelection: false
    };
    this.inputElRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.updateSelection) {
      const selection = this.state.updateSelection;
      this.inputElRef.current.selectionStart = selection.start;
      this.inputElRef.current.selectionEnd = selection.end;
      this.setState({ updateSelection: false });
    }
  }

  _handlerClick(active) {
    this.setState({ active });
  }

  _handleChange(e) {
    const { input } = this.props;
    e.preventDefault();
    const { normalize, variant } = this.props.meta;
    let newValue;
    if (normalize) {
      const normalValue = normalize(e.target.value);
      newValue = normalValue !== undefined ? normalValue : input.value;
    } else {
      newValue = e.target.value;
    }
    this.setState({ value: newValue }, () => {
      input.onChange(this.state.value);

      if (variant !== 'area-filled' && variant !== 'area-line') {
        this.inputElRef.current.style.height = 'inherit';

        if ((this.inputElRef.current.value.match(/\n/g) || []).length === 0) {
          this.inputElRef.current.style.height = `15px`;
        } else {
          this.inputElRef.current.style.height = `${this.inputElRef.current.scrollHeight}px`;
        }
      }
      this.setState({ updateSelection: { ...this.state.inputSelection } });
    });
  }

  _handlerClickWrapper() {
    const { onClick } = this.props;

    this.inputElRef.current.focus();

    if (typeof onClick === 'function') {
      onClick();
    }
  }

  _handlerFocus() {
    const { input } = this.props;
    const { onFocus = () => { } } = input;

    this.saveCursorPosition();

    onFocus();
  }

  _handlerHover(hover) {
    this.setState({ hover });
  }

  _handlerKeydown(e) {
    if (e.key === 'Backspace') {
      this.saveCursorPosition(-1);
    } else {
      this.saveCursorPosition(1);
    }
  }

  _handlerKeyUp(e) {
    const { input } = this.props;
    const number = new RegExp(/^\d+$/);
    let increment;
    if (e.key === 'ArrowUp' && number.test(e.target.value)) {
      increment = 1;
      this.saveCursorPosition(2);
    }
    if (e.key === 'ArrowDown') {
      increment = -1;
    }
    if (increment) {
      this.setState({ value: parseInt(e.target.value) + increment }, () => {
        input.onChange(this.state.value);
      });
    }
  }

  saveCursorPosition(increment) {
    this.setState({
      inputSelection: {
        start: this.inputElRef.current.selectionStart + increment,
        end: this.inputElRef.current.selectionEnd + increment
      }
    });
  }

  render() {
    const { classes, input, meta: {
      'icon-align': iconAlign,
      className : classNameProps,
      color,
      disabled,
      error,
      icon: Icon,
      helper = '',
      placeholder = '',
      type,
      variant = 'basic-filled'
    }, onClickIcon } = this.props;
    const {
      onBlur = () => { },
      onMouseEnter = () => { },
      onMouseLeave = () => { }
    } = input;
    const { active, hover } = this.state;
    const variantData = variant ? variant : 'basic-filled';
    const Tag = variantData === 'basic-filled' || variantData === 'basic-line' ? 'input' : 'textarea';
    const inputForm = (
      <Tag
        className={classNames(
          classes.formInput,
          {
            [classes.formInputFilled]:
              variantData.match(/^[a-z]{0,10}-filled$/g) && !(this.state.hover || disabled),
            [classes.formInputFilledHover]:
              variantData.match(/^[a-z]{0,10}-filled$/g) && (this.state.hover || disabled),
            [classes.formInputLine]:
              variantData.match(/^[a-z]{0,10}-line$/g),
          },
          { [classes.textarea]: Tag === 'textarea' },
          { [classes.formInputDisabled]: disabled && variantData.match(/^[a-z]{0,10}-filled$/g) },
          { [classes.formInputError]: error },
          { [classes.variantLine]: variantData === 'area-line' || variantData === 'multiline-line' || variantData === 'basic-line' },
          { [classes.textareaHideScroll]: Tag === 'textarea' && (variantData === 'multiline-filled' || variantData === 'multiline-line') },
          { [classes.textAreaVariant]: Tag === 'textarea' && (variantData === 'area-filled' || variantData === 'area-line') },
        )}
        disabled={disabled}
        id={input.name}
        name={input.name}
        onBlur={onBlur.bind(this)}
        onChange={this._handleChange.bind(this)}
        onFocus={this._handlerFocus.bind(this)}
        onKeyDown={this._handlerKeydown.bind(this)}
        onKeyUp={this._handlerKeyUp.bind(this)}
        onMouseEnter={onMouseEnter.bind(this)}
        onMouseLeave={onMouseLeave.bind(this)}
        placeholder={placeholder}
        ref={this.inputElRef}
        style={{ color: color }}
        type={type}
        value={input.value}
      />);

    return (
      <section
        onClick={this._handlerClickWrapper.bind(this)}
        onMouseEnter={this._handlerHover.bind(this, true)}
        onMouseLeave={this._handlerHover.bind(this, false)}
      >
        <div
          className={classNames(
            classes.formInputWrap,
            { [classes.formActive]: active },
            {
              [classes.iconRight]: iconAlign === 'right',
              [classes.iconLeft]: iconAlign === 'left'
            },
            {
              [classes.formInputWrapFilled]:
                variantData.match(/^[a-z]{0,10}-filled$/g) && !(hover || disabled),
              [classes.formInputWrapFilledHover]:
                variantData.match(/^[a-z]{0,10}-filled$/g) && (hover || disabled),
              [classes.formInputWrapLine]:
                variantData.match(/^[a-z]{0,10}-line$/g),
            },
            {
              [classes.formInputWrapDisabled]: disabled &&
                variantData.match(/^[a-z]{0,10}-filled$/g)
            },
            { [classes.formInputWrapError]: error },
            { [classes.textareaWraper]: Tag === 'textarea' },
            classNameProps
          )}
        >
          {
            //showwing icon
            Icon && <div
              className={classNames(classes.iconWrap)}
              onClick={onClickIcon}
            >
              <Icon fontSize="inherit" />
            </div>
          }
          <div
            className={classNames(classes.formInputTextWrap, { [classes.formInputActive]: active })}
            id="wrapper"
            onBlur={this._handlerClick.bind(this, false)}
            onFocus={this._handlerClick.bind(this, true)}
          >
            {inputForm}
            <label
              className={classNames(
                classes.formInputTextLabel,
                { [classes.formLabelActive]: active },
                {
                  [classes.formInputDisabled]: disabled &&
                    variantData.match(/^[a-z]{0,10}-filled$/g)
                },
                { [classes.formInputTextLabelError]: error }
              )}
              htmlFor={input.name}
            >
              <b>
                <Typography variant="overline2">{placeholder}</Typography>
              </b>
            </label>
          </div>
        </div>
        <div className={classNames(classes.helperWrap, { [classes.helperWrapError]: error })}>
          <Typography variant="overline1">{helper}</Typography>
        </div>
      </section >
    );
  }
}

Textfield.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func
};
Textfield.defaultProps = {
  input: {},
  meta: {
    'icon-align': 'right',
    color: 'primary',
    disabled: 'false',
    error: null,
    icon: null,
    helper: '',
    placeholder: '',
    type: null,
    variant: 'basic-filled'
  },
  onClick: () => { },
  onClickIcon: () => { },
};
