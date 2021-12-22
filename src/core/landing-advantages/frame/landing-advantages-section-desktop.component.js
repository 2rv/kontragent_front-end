import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function LandingAdvantagesSectionDesktopCompmponent({ rowReverse, title, description, image }) {
  return (
    <Grid container direction={rowReverse ? 'row-reverse' : 'row'} alignItems="center" wrap="wrap" gap="32px">
      <Grid item sx={{ maxWidth: '500px' }} display="flex" flexDirection="column">
        <Typography variant="landingTitleHero">{title}</Typography>
        {description}
      </Grid>
      <Grid item sx={{ maxWidth: '500px' }}>
        <img src={image} />
      </Grid>
    </Grid>
  );
}
