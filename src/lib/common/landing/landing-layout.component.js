import Box from '@mui/material/Box';

export function LandingLayout({ children, height, }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }} height={height}>
      <Box sx={{ p: 8, width: '100%', maxWidth: '1140px', display: 'flex', alignSelf: 'center', flexDirection: 'column' }}>
        {children}
      </Box>
    </Box>
  );
}
