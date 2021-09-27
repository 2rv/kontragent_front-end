import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { redirect, getQuery } from '../../../main/navigation/navigation.core';

export function CompanyAccountRevisionCreateInfo() {
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" sx={{ pb: 2 }} component="div">
            Создать проверку контрагента
          </Typography>
          <Typography variant="subTitle" component="div">
            Создайте проверку контрагента, загрузите информацию и получите
            детальную аналитику и отчет по компании вашего контргаента
          </Typography>
        </Box>

        <Grid container>
          <Grid xs={3}>
            <Button
              onClick={() => {
                return redirect(
                  (
                    { companyId } = {
                      companyId: '[companyId]',
                    },
                  ) => `/company/${companyId}/revision/create`,
                  {
                    dynamic: true,
                    params: {
                      companyId: getQuery('companyId'),
                    },
                  },
                );
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
