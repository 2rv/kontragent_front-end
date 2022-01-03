import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        <Title variant="landingTitle" sx={{ fontSize: '24px' }}>{title}</Title>
        {description}
      </Box>
      <Box>
        <img src={image} />
      </Box>
    </Box>
  );
}

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
