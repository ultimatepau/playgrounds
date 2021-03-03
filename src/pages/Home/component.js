import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class Home extends Component { 
  state = {
    date: null
  }
  handleChange = ({ target: { value }}) => this.setState({ date: value });

  isValidDate(dateString) {
      // First check for the pattern
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
          return false;

      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month === 0 || month > 12)
          return false;

      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
          monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
  };

  handleBlur = () => !this.isValidDate(this.state.date) && this.setState({ date: '' });
  
  render() {
    const { date } = this.state;
    const digit = /[0-9]/;
    const mask = [
      /[0-3]/,
      /[0-9]/,
      "/",
      /[0-1]/,
      date && date[0].startsWith(1) ? /[0-2]/ : /[1-9]/,
      "/",
      /[1-2]/, 
      date && date[6].startsWith(1) ? /[9]/ : /[0]/,
      digit,
      digit
    ];
    const maskPlaceholder = 'dd/mm/yyyy';
    console.log('euy', date)
    return (
      <div>
        Halo Ini Home
        <div>
          <InputMask 
            onBlur={this.handleBlur}
            mask={mask}
            maskPlaceholder={maskPlaceholder}
            placeholder="dd/mm/yyyy"
            onChange={this.handleChange}
            alwaysShowMask
            value={date}
          />
        </div>
      </div>
    );
  }
}