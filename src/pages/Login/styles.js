const styles = (theme) => ({
  '@global': {
    'body': {
      backgroundColor: theme.colors.teal10
    },
    ...theme.types
  },
  root: {
    maxWidth: 1300,
    width: '100%',
    backgroundColor: theme.colors.teal10,
    position: 'relative',
    left: '50%',
    transform: ' translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    '& .logo-kr': {
      margin: '40px 0 15px 100px',
      width: 94,
      height: 68
    },
    '& .login-container': {
      background: theme.colors.teal10 + ' url(./ilustrasi.svg) 0 0 no-repeat',
      height: 741,
      width: 794,
      alignSelf: 'center',
      marginBottom: 66,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .login-container-inner': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      width: 425,
      height: 428,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > h3': {
        margin: '41px 0 20px 0'
      },
      '& > .subtitle-1': {
        maxWidth: 226,
        textAlign: 'center',
        margin: 0,
        marginBottom: 38,
      },
      '& > form': {
        width: 330,
        '& > section': {
          '&:first-of-type': {
            marginBottom: 16
          }
        }
      },
      '& .login-footer': {
        marginTop: 62,
        '& .lupa': {
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '16px',
          color: theme.colors.teal60,
          cursor: 'pointer',
          marginRight: 103
        },
        '& .masuk': {
          backgroundColor: theme.colors.teal60,
          borderRadius: 4,
          width: 110,
          fontSize: 14,
          lineHeight: '16px',
          color: '#fff',
          padding: '8px 0'
        }
      }
    }
  }
});
export default styles;