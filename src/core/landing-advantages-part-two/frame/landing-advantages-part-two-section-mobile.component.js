import Box from '@mui/material/Box';

export function LandingAdvantagesPartTwoSectionMobileCompmponent({ title, description, image }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column-reverse',
        gap: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
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
