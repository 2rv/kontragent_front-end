import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function LandingAdvantagesPartTwoSectionDesktopCompmponent({ rowReverse, title, description, image }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap="32px"
      sx={{
        flexDirection: { xs: 'column-reverse', lg: rowReverse ? 'row-reverse' : 'row' }
      }}
    >
      <Box display="flex" flexDirection="column" gap="24px" maxWidth="529px">
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
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
