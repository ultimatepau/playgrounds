import { Grey, Red } from '@telkomdesign/colors/lib';

const styles = theme => ({
  '@global': {
    input: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset'
      },
      '&:disabled': {
        backgroundColor: 'inherit'
      }
    }
  },
  content: {
    content: '',
    display: 'block',
    paddingTop: '100%'
  },
  formActive: {
    borderBottom: 'solid ' + theme.palette.base.primary.main + ' !important',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    WebkitBoxSizing: 'border-box'
  },
  formColorPreview: {
    border: 'solid ' + theme.palette.base.primary.main,
    borderRadius: '4px',
    borderWidth: '0px 0.5px 0px 0px',
    maxHeight: '100%',
    minHeight: '99%',
    position: 'relative',
    width: '50%'
  },
  formIcon: {
    margin: '0 -5px 0 5px',
    maxHeight: '40%',
    width: '10%'
  },
  formInput: {
    '&:-moz-placeholder': {
      color: 'transparent'
    },
    '&:-ms-input-placeholder': {
      color: 'transparent'
    },
    '&:-webkit-autofill': {
      color: 'grey',
      WebkitBoxShadow: '0 0 0 30px white inset'
    },
    '&::-moz-placeholder': {
      color: 'transparent'
    },
    '&::-webkit-input-placeholder': {
      color: 'transparent'
    },
    '&::placeholder': {
      color: 'transparent'
    },
    '&:focus': {
      outline: 'none'
    },
    '&:focus + label': {
      color: theme.palette.base.primary.dark,
      fontWeight: '600',
      transform: 'translate(0, 0) scale(1) !important',
      transformOrigin: 'left bottom'
    },
    '&:placeholder-shown + label': {
      cursor: 'text',
      maxWidth: '62%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transform: 'translate(0, 0.8rem) scale(1.4)',
      transformOrigin: 'left bottom',
      whiteSpace: 'nowrap'
    },
    border: '0px',
    color: Grey[90],
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: '500',
    width: '99%'
  },
  formInputColor: {
    width: '69% !important'
  },
  formInputDisabled: {
    color: `${Grey[50]} !important`,
    cursor: 'not-allowed !important'
  },
  formInputError: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 30px ${Red[20]} inset`
    },
    backgroundColor: `${Red[20]} !important`
  },
  formInputFilled: {
    backgroundColor: Grey[20]
  },
  formInputFilledHover: {
    backgroundColor: Grey[30]
  },
  formInputTextLabel: {
    color: Grey[90],
    fontSize: '10px',
    textTransform: 'capitalize',
    transition: 'all 0.2s'
  },
  formInputTextLabelError: {
    color: Red[60]
  },
  formInputTextWrap: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column-reverse',
    maxWidth: '100%',
    padding: '15px 0px'
  },
  formInputWrap: {
    alignContent: 'center',
    alignItems: 'center',
    borderBottom: 'solid ' + Grey[70],
    borderRadius: '2px',
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: theme.typography.fontFamily,
    height: '50px',
    MozBoxSizing: 'border-box',
    padding: '0px 8px',
    WebkitBoxSizing: 'border-box',
    width: '100%'
  },
  formInputWrapDisabled: {
    borderBottom: 'solid ' + Grey[50],
    color: Grey[50],
    cursor: 'not-allowed'
  },
  formInputWrapError: {
    backgroundColor: `${Red[20]} !important`,
    borderBottom: 'solid ' + Red[60]
  },
  formInputWrapFilled: {
    backgroundColor: Grey[20]
  },
  formInputWrapFilledHover: {
    backgroundColor: Grey[30]
  },
  formLabelActive: {
    color: theme.palette.base.primary.dark,
    fontWeight: '600'
  },
  helperWrap: {
    position: 'absolute',
    color: Grey[90],
    margin: '4px 8px'
  },
  helperWrapError: {
    color: Red[60]
  },
  iconLeft: {
    flexDirection: 'row'
  },
  iconRight: {
    flexDirection: 'row-reverse'
  },
  iconWrap: {
    cursor: 'pointer',
    color: Grey[90],
    display: 'flex',
    fontSize: '20px',
    marginRight: '8px'
  },
  textarea: {
    height: '15px',
    resize: 'none'
  },
  textareaHideScroll: {
    '&::-webkit-scrollbar': {
      background: 'transparent !important',
      width: '0px !important'
    }
  },
  textAreaVariant: {
    height: '150px'
  },
  textareaWraper: {
    height: 'inherit'
  },
  variantLine: {
    backgroundColor: 'inherit'
  }
});

export default styles;
