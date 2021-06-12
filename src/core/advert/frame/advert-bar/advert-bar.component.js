import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SecondaryText } from '../../../../lib/elements/text';

export function AdvertBarComponent(props) {
  const { advertImageURL } = props;
  return (
    <AdvertBarLayout advertImageURL={advertImageURL}>
      <AdvertInfoCardLayout>
        <AdvertInfoCardText tid="ADVERT.ADVERT_INFO" />
      </AdvertInfoCardLayout>
    </AdvertBarLayout>
  );
}

const AdvertBarLayout = styled.div`
  width: 100%;
  height: 64px;
  padding: ${spacing(4)};
  background: ${(props) =>
    `no-repeat center/cover url(${props.advertImageURL})`};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  display: flex;
  justify-content: flex-end;
`;

const AdvertInfoCardLayout = styled(PrimaryBox)`
  width: 85px;
  height: 36px;
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdvertInfoCardText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
`;
