import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        minHeight: {
          md: '440px',
          sm: '600px',
          xs: '460px',
        },
      }}
    >
      <PolygonSvg src="/static/img/landing/polygon.svg" />

      <Grid item>
        <Typography
          variant="landingTitle"
          sx={{
            fontSize: {
              sm: 'landingTitle.fontSize',
              xs: '16px',
            },
          }}
        >
          {text('LANDING.BETA_INFO.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            fontSize: {
              sm: 'landingText.fontSize',
              xs: '12px',
            },
          }}
        >
          {text('LANDING.BETA_INFO.DESCRIPTION')}
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction="row"
        columns={4}
        justifyContent="flex-start"
        columns={{ xs: 8, lg: 12 }}
        rowSpacing={4}
      >
        {graphicData.map((graphic, index) => (
          <Grid
            item
            xs
            container
            key={index}
            spacing={4}
            justifyContent="flex-start"
            xs={4}
            lg={3}
          >
            <Grid item>
              <GraphicContainer>
                <GraphicCricle>
                  <GraphicPoint />
                </GraphicCricle>
                {graphicData.length - 1 !== index && (
                  <GraphicLineContainer>
                    <GraphicLine />
                    <GraphicPoint />
                    <GraphicLine />
                  </GraphicLineContainer>
                )}
              </GraphicContainer>
            </Grid>

            <Grid item>
              <Typography
                variant="title"
                sx={{
                  fontSize: {
                    sm: 'title.fontSize',
                    xs: '12px',
                  },
                }}
                children={graphic.date}
              />
            </Grid>

            <Grid item>
              <ul style={{ listStyle: 'inherit', marginLeft: '16px' }}>
                {graphic.tasks.map((task, index) => (
                  <li key={index}>
                    <Typography
                      variant="landingText"
                      sx={{
                        fontSize: {
                          sm: 'landingText.fontSize',
                          xs: '10px',
                        },
                      }}
                      children={task}
                    />
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const PolygonSvg = styled.img`
  position: absolute;
  @media (max-width: 1366px) {
    display: none;
  }
  @media (min-width: 1366px) and (max-width: 1600px) {
    top: 40%;
    left: -10%;
  }
  @media (min-width: 1600px) {
    top: 40%;
    left: -23%;
  }
`;
const GraphicContainer = styled.div`
  display: flex;
  width: 100%;
`;
const GraphicLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const GraphicCricle = styled.div`
  border: 3px solid #3ab8ff;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;
const GraphicPoint = styled.div`
  background-color: #3ab8ff;
  padding: 4.5px;
  border-radius: 50%;
`;
const GraphicLine = styled.div`
  border-bottom: 1px solid #b5b5b5;
  width: 100%;
`;
