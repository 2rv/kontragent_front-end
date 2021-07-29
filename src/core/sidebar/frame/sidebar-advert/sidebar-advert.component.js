import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SecondaryText } from '../../../../lib/elements/text';

export function SidebarAdvertComponent(props) {
  const {
    backgroungImageURL = 'https://i.ytimg.com/vi/G6l368Oa6lk/maxresdefault.jpg',
  } = props;
  return (
    <Container>
      <SidebaerAdvertLayout backgroungImageURL={backgroungImageURL}>
        <AdvertInfoCardLayout>
          <AdvertInfoCardText tid="ADVERT.ADVERT_INFO" />
        </AdvertInfoCardLayout>
        <AdvertText>Лушчие проверки контрагентов в мире!</AdvertText>
      </SidebaerAdvertLayout>
    </Container>
  );
}
const Container = styled.div`
  padding-right: ${spacing(5)};
  @media screen and (max-height: 720px) {
    display: none;
  }
`;
const SidebaerAdvertLayout = styled.div`
  min-width: 286px;
  min-height: 286px;
  padding: ${spacing(4)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => `no-repeat center url(${props.backgroungImageURL})`};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const AdvertInfoCardLayout = styled(PrimaryBox)`
  width: 85px;
  height: 36px;
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  backdrop-filter: blur(25px);
  opacity: 0.75;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdvertInfoCardText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
`;

const AdvertText = styled.div`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.BOLD};
  color: ${THEME_COLOR.TEXT.BASE};
  line-height: 1.5;
`;
