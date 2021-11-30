import { palette } from './palette.theme';
export const components = {
  MuiPaper: {
    defaultProps: {
      sx: {
        p: 8,
      },
      variant: 'elevation',
      elevation: 24,
      width: '100%',
    },
    styleOverrides: {
      root: {},
      outlined: {
        borderColor: 'transparent',
      },
      elevation24: {
        boxShadow: '0px 15px 75px rgba(0, 0, 0, 0.1)',
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
  MuiSelect: {
    defaultProps: {
      variant: 'outlined',
      fullWidth: true,
      displayEmpty: true,

      size: 'medium',
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
    variants: [
      {
        props: { variant: 'grey', color: 'black' },
        style: {
          '&:hover': {
            backgroundColor: palette.primaryDark[900],
            opacity: 0.9,
            color: '#fff',
          },
          backgroundColor: palette.grey[10],
          color: palette.primaryDark[900],
        },
      },
      {
        props: { variant: 'grey', color: 'blue' },
        style: {
          '&:hover': {
            backgroundColor: '#F3F3F3',
            opacity: 0.9,
          },
          backgroundColor: '#F3F3F3',
          color: '#3AB8FF',
          border: '1px solid #3AB8FF',
        },
      },
      {
        props: { variant: 'grey', color: 'black1' },
        style: {
          '&:hover': {
            backgroundColor: '#F3F3F3',
            opacity: 0.9,
          },
          backgroundColor: '#F3F3F3',
          color: palette.primaryDark[900],
        },
      },
      {
        props: { variant: 'grey', color: 'red' },
        style: {
          '&:hover': {
            backgroundColor: palette.grey[10],
            opacity: 0.9,
          },
          backgroundColor: palette.grey[10],
          color: palette.error.button,
        },
      },
      {
        props: { variant: 'black' },
        style: {
          '&:hover': {
            backgroundColor: palette.primaryDark[900],
            opacity: 0.9,
          },
          backgroundColor: palette.primaryDark[900],
          color: palette.primary.contrastText,
        },
      },
      {
        props: { variant: 'red' },
        style: {
          '&:hover': {
            backgroundColor: palette.error.button,
            opacity: 0.9,
          },
          backgroundColor: palette.error.button,
          color: palette.primary.contrastText,
        },
      },
    ],
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
      title: { fontSize: '18px' },
      subTitle: { fontSize: '14px' },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: 0,
      },
    },
  },
  MuiTab: {
    defaultProps: {},
  },
  MuiAlert: {
    defaultProps: {},
    styleOverrides: {
      root: {
        disply: 'flex',
        flexDirction: 'row',
        alignItems: 'center',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      label: {
        overflow: 'visible',
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#F3F3F3',
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
        },
      },
    },
  },
};
