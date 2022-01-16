import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { LandingAdvantagesSectionMobileCompmponent } from './frame/landing-advantages-section-mobile.component';

export function LandingAdvantagesMobileComponent() {
  return (
    <Box sx={{ display: 'grid', gap: '24px' }}>
      <LandingAdvantagesSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-1-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES.BLOCK_1.TITLE')}
          </Title>
        }
        description={
          <SmallText variant="body1">
            Информационную услугу, а простым языком диагностику книги покупок на предмет наличия расхождений или разрывов
            по декларации НДС. Клиент получает детальную расшифровку выявленных проблемных участков, а также рекомендации специалистов нашей платформы по ее устранению и пресечению.
          </SmallText>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages/image-2-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES.BLOCK_2.TITLE')}
          </Title>
        }
        description={
          <SmallText variant="body1">
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_1')}
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_3')}
          </SmallText>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-3-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES.BLOCK_3.TITLE')}
          </Title>
        }
        description={
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li><SmallText variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_1')}</SmallText></li>
            <li><SmallText variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_2')}</SmallText></li>
            <li><SmallText variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_3')}</SmallText></li>
            <li><SmallText variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_4')}</SmallText></li>
          </ul>
        }
      />
    </Box>
  );
}

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
