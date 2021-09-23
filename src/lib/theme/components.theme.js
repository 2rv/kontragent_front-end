export const components = {
  MuiPaper: {
    defaultProps: {
      sx: {
        p: 8,
      },
      elevation: 0,
      width: '100%',
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiGrid: {
    defaultProps: {
      direction: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      fullWidth: true,
      size: 'normal',
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: {
        backgroundColor: '#F3F3F3',
      },
      notchedOutline: {
        borderColor: '#E5E8EC',
      },
      input: {
        fontSize: '14px',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        sizeSmall: true,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      size: 'large',
    },
    styleOverrides: {
      root: {
        fontSize: '16px',
        boxShadow: 'none',
      },
    },
  },
};
