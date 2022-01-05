import Box from '@mui/material/Box';

export function LandingAdvantagesSectionDesktopCompmponent({ rowReverse, title, description, image }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: rowReverse ? 'row-reverse' : 'row',
        gap: '32px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '529px',
        }}
      >
        {title}
        {description}
      </Box>
      <Box>
        <img src={image} />
      </Box>
    </Box>
  );
}
