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
