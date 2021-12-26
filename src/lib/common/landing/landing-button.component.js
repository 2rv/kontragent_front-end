import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function LandingButtonComponent({ tid, onClick, variant, sx, maxWidth, height }) {
  return (
    <Button
        variant={variant}
        onClick={onClick}
        sx={{
          ...sx,
          boxShadow: '0px 15px 75px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: maxWidth ? maxWidth : '320px',
          height: { xs: height ? height : '40px', lg: height ? height : '52px' },
        }}
      >
      <Typography variant="landingText" sx={{ fontSize: { xs: '12px', lg: 'inherit' } }}>{tid}</Typography>
    </Button>
  );
}
