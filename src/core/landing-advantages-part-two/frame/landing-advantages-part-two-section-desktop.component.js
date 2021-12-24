import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function LandingAdvantagesPartTwoSectionDesktopCompmponent({ rowReverse, title, description, image }) {
  return (
    <Grid
      container
      direction={rowReverse ? 'row-reverse' : 'row'}
      alignItems="center"
      wrap="wrap"
      gap="32px"
      sx={{
        flexDirection: { xs: 'column-reverse', lg: rowReverse ? 'row-reverse' : 'row' }
      }}
    >
      <Grid item sx={{ maxWidth: '500px' }} display="flex" flexDirection="column">
        <Title variant="landingTitleHero">{title}</Title>
        {description}
      </Grid>
      <Grid item sx={{ maxWidth: '500px' }}>
        <img src={image} />
      </Grid>
    </Grid>
  );
}

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 17px;
    line-height: 20px;
  }
`;
