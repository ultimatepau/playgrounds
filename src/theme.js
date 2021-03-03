import {
  Blue,
  Purple,
  Teal,
  Yellow,
  Grey,
  Sky,
  Lime,
} from '@telkomdesign/colors';

import Colors from './configs/Colors';
// import { createMuiTheme } from '@material-ui/core/styles';

const fontWeight = {
  black: 900,
  bold: 700,
  light: 300,
  medium: 500,
  regular: 400,
  thin: 100,
};

export const theme = {
  palette: {
    base: {
      primary: {
        main: Teal[60],
        dark: Teal[70],
        light: Teal[50],
      },
      secondary: {
        main: Purple[60],
        dark: Purple[70],
        light: Purple[50],
      },
      //optional
      tertiary: {
        main: Blue[60],
        dark: Blue[70],
        light: Blue[50],
      },
    },

    grey: Grey,

    common: {
      black: Grey[100],
      white: '#FFFFFF',
    },

    event: {
      success: {
        main: Lime[80],
        light: Lime[10],
      },
      error: {
        main: Teal[60],
        light: Teal[10],
      },
      information: {
        main: Sky[50],
        light: Sky[10],
      },
      warning: {
        main: Yellow[80],
        light: Yellow[10],
      },
      disabled: { main: Grey[50] },
    },

    text: {
      primary: {
        dark: Teal[50],
        light: Teal[80],
      },
      secondary: {
        dark: Purple[50],
        light: Purple[80],
      },
      tertiary: {
        dark: Purple[50],
        light: Purple[80],
      },
    },
  },
  pxToRem: (px) => {
    const base = window
      .getComputedStyle(document.body)
      .getPropertyValue('font-size')
      .replace('px', '');

    return `${px / base}rem`;
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.regular,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    fontSizeInherit: 'inherit',

    h1: {
      fontSize: '60px',
      fontWeight: fontWeight.light,
    },
    h2: {
      fontSize: '48px',
      fontWeight: fontWeight.regular,
    },
    h3: {
      fontSize: '34px',
      fontWeight: fontWeight.regular,
    },
    h4: {
      fontSize: '24px',
      fontWeight: fontWeight.regular,
    },
    h5: {
      fontSize: '23px',
      fontWeight: fontWeight.medium,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: fontWeight.medium,
    },
    body1: {
      fontSize: '16px',
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontSize: '14px',
      fontWeight: fontWeight.regular,
    },
    button: {
      fontSize: '14px',
      fontWeight: fontWeight.bold,
      textTransform: 'initial'
    },
    caption: {
      fontSize: '12px',
      fontWeight: fontWeight.regular,
    },
    overline1: {
      fontSize: '10px',
      fontWeight: fontWeight.regular,
    },
    overline2: {
      fontSize: '10px',
      fontWeight: fontWeight.medium,
    },
  },

  homeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',

    '& .title': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',

      '& h5': {
        margin: 0,
        color: Colors.teal60,
        lineHeight: '33px',
      },

      '& .underline': {
        marginTop: '4px',
        height: '5px',
        width: '98px',
        backgroundColor: Colors.teal40,
        borderRadius: '5px',
      },
    },
  },

  types: {
    h1: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '60px',
      lineHeight: '72px',
    },
    h2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '48px',
      lineHeight: '56px',
    },
    h3: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '34px',
      lineHeight: '40px',
    },
    h4: {
      fontSize: '24px',
      lineHeight: '28px',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    h5: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '23px',
    },
    '.subtitle-1': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '19px',
    },
    '.subtitle-2': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '19px',
    },
    '.body-1': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '22px',
    },
    '.body-2': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '18.2px',
    },
    button: {
      cursor: 'pointer',
      border: 'unset',
      backgroundColor: 'unset',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: '14px',
      lineHeight: '16px',
    },
    '.caption': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '15px',
    },
    '.overline-1': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '10px',
      lineHeight: '12px',
    },
    '.overline-2': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '10px',
      lineHeight: '12px',
    }
  },

  colors: {
    ...Colors
  },

  query: {
    mediumsmall: '@media (max-width:1299px)',
    medium: '@media (min-width: 768px) and (max-width:1299px)',
    small: '@media (max-width: 767px)'
  },

  breadcrumbs: {
    marginLeft: 111,
    ['@media (min-width: 768px) and (max-width:1299px)']: {
      margin: '0 0 45px 0',
    },
    ['@media (max-width:767px)']: {
      display: 'none'
    }
  }
};

export default theme;

// export default createMuiTheme({
//   ...theme
// });
