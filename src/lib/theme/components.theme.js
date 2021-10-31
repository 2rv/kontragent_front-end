export const components = {
  MuiPaper: {
    defaultProps: {
      sx: {
        p: 8,
      },
      variant: 'elevation',
      elevation: 0,
      width: '100%',
    },
    styleOverrides: {
      root: {},
      outlined: {
        borderColor: 'transparent',
      },
    },
  },
  MuiDrawer: {
    defaultProps: {
      PaperProps: {
        variant: 'elevation',
        elevation: 0,
      },
    },
    styleOverrides: {
      paper: {
        border: 'none',
      },
      root: {
        border: 'none',
      },
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
      size: 'medium',
      inputProps: {
        style: {
          minHeight: '46px',
          boxSizing: 'border-box',
        },
      },
    },
    styleOverrides: {},
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
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontSize: '16px',
        boxShadow: 'none',
        height: '46px',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: '#F3F3F3',
        borderRadius: '10px',
        borderWidth: '1px;',
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      gutterBottom: false,
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiListItemText: {
    defaultProps: {
      gutterBottom: false,
    },
    styleOverrides: {
      root: {
        margin: 0,
      },
    },
  },
  MuiTab: {
    defaultProps: {},
    styleOverrides: {
      textColorPrimary: {
        color: '#707070',
        fontWeight: '500',
        fontSize: '16px',
      },
      selected: {
        color: '#252525',
      },
    },
  },
  MuiAlert: {
    defaultProps: {},
    styleOverrides: {
      root: {
        disply: 'flex',
        flexDirction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
};
