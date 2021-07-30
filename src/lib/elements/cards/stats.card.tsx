import styled from 'styled-components';

import { StatsCardType } from './type.cards';

import { PrimaryBox } from '../box';
import { SectionLayout, IndentLayout } from '../layout';
import { PrimaryText } from '../text';
import { PrimaryDivider } from '../divider';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../theme';

export function StatsCard(props: StatsCardType) {
  const { title, totalStatsDay = null, headerIcon, children } = props;

  return (
    <CardBox>
      <SectionLayout>
        <IndentLayout type={'STANDART'}>
          <Header>
            <div>
              <TitlePrimary tid={title} />&nbsp;
              {totalStatsDay && <TitleSecondary tid={totalStatsDay} />}
            </div>
            {headerIcon}
          </Header>
          <Divider />
          <Content>
            {children}
          </Content>
        </IndentLayout>
      </SectionLayout>
    </CardBox>
  );
}

const CardBox = styled(PrimaryBox)`
  box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const TitleSecondary = styled(TitlePrimary)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;

const Divider = styled(PrimaryDivider)`
  margin: ${spacing(2)};
`;
