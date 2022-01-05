import Box from '@mui/material/Box';

export function LandingAdvantagesPartTwoSectionDesktopCompmponent({ rowReverse, title, description, image }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: rowReverse ? 'row-reverse' : 'row',
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
