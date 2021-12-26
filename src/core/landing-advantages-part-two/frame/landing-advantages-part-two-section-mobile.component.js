import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function LandingAdvantagesPartTwoSectionMobileCompmponent({ title, description, image }) {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      flexDirection="column-reverse"
      gap="12px"
    >
      <Box display="flex" flexDirection="column" gap="12px" maxWidth="529px">
        <Title variant="landingTitle">{title}</Title>
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

