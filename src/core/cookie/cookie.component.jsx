import { Button, Snackbar } from '@mui/material';
import { text } from '../../lib/common/text';

export function CookieComponent(props) {
  const { isOpen, handleClose, handleConfirm } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{
        zIndex: 9999,
        '& .MuiSnackbarContent-action': {
          marginLeft: '-8px',
          marginRight: 'auto',
        },
      }}
      open={isOpen}
      onClose={handleClose}
      message={text('LANDING.COOKIE.MESSAGE')}
      action={
        <Button
          variant="text"
          children={text('LANDING.COOKIE.OKAY')}
          onClick={handleConfirm}
        />
      }
    />
  );
}
