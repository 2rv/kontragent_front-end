import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { redirect } from '../../../main/navigation/navigation.core';

export function CompanyCreateInfoComponent() {
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" sx={{ pb: 2 }} component="div">
            Создать компанию
          </Typography>
          <Typography variant="subTitle" component="div">
            Создайте свою компанию, чтобы пользоваться платформой
          </Typography>
        </Box>

        <Grid container>
          <Grid xs={3}>
            <Button
              onClick={() => {
                redirect('/company/create');
              }}
            >
              Создать
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
