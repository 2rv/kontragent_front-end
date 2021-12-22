import Button from '@mui/material/Button';

export function LandingButtonComponent({ tid, onClick, variant, sx }) {
  return (
    <Button variant={variant} onClick={onClick} sx={sx}>
      {tid}
    </Button>
  );
}
