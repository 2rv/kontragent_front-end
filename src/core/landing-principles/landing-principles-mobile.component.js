import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function LandingPrinciplesMobileComponent() {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        minHeight: '300px',
      }}
    >
      <Box display="flex" flexDirection="column" gap="8px">
        <Title variant="landingTitle">
          Платформа придерживается некоторым принципам
        </Title>
        <SmallText variant="landingText">
          Вот 3 основных из них:
        </SmallText>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="24px">
        <Box display="flex" alignItems="center" gap="16px">
          <Icon src="/static/img/landing/landing-principles/icon-1.svg" />
          <SmallText variant="landingText">Мы приносим пользу и ценность предпринимателям</SmallText>
        </Box>
        <Box display="flex" alignItems="center" gap="16px">
          <Icon src="/static/img/landing/landing-principles/icon-2.svg" />
          <SmallText variant="landingText">Мы ценим наших клиентов и дорожим их доверием</SmallText>
        </Box>
        <Box display="flex" alignItems="center" gap="16px">
          <Icon src="/static/img/landing/landing-principles/icon-3.svg" />
          <SmallText variant="landingText">Мы гарантируем качество и ответственность результата</SmallText>
        </Box>
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

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
