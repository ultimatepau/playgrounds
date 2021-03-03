import React, { Component } from 'react';
import logo from './assets/logo-kr.svg';
import Textfield from '../../components/elements/Textfield';
import { Eye, EyeDisabled } from '@telkomdesign/icons';

export default class login extends Component {
  state = {
    passwordVisible: false

  }
  render() {
    const { classes } = this.props;
    const { passwordVisible } = this.state;

    return (
      <div className={classes.root}>
        <img className="logo-kr" src={logo} />
        <div className="login-container">
          <div className="login-container-inner">
            <h3>Halo Admin!</h3>
            <p className="subtitle-1">
              Silakan masuk untuk mengelola Knowledge Repository.
            </p>
            <form>
              <Textfield
                input={{
                  name: 'email',
                  onChange: (value) => console.log(value),
                  onFocus: () => console.log('focus email'),
                  onBlur: () => console.log('blur email')
                }}
                meta={{
                  placeholder: 'Email',
                  type: 'text',
                  variant: 'basic-line',
                  helper: 'Format email Anda salah',
                  error: true
                }}
              />
              <Textfield
                onClickIcon={() => this.setState({ passwordVisible: !passwordVisible })}
                input={{
                  name: 'email',
                  onChange: (value) => console.log(value)
                }}
                meta={{
                  placeholder: 'Kata Sandi',
                  'icon-align': 'right',
                  icon: passwordVisible ? Eye : EyeDisabled ,
                  type: passwordVisible ? 'text' : 'password',
                  variant: 'basic-line'
                }}
              />
            </form>
            <div className="login-footer">
              <span className="lupa">Lupa Kata Sandi?</span>
              <button className="masuk">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}