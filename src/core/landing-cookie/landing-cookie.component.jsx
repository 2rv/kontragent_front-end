import { Button, Snackbar } from '@mui/material';

export function LandingCookieComponent(props) {
  const { isOpen, handleClose } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isOpen}
      onClose={handleClose}
      message="Использование файлов Cookie"
      action={
        <Button variant="text" children={'Хорошо'} onClick={handleClose} />
      }
    />
  );
}
