import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SecondaryText } from '../../../../lib/elements/text';

export function AdvertCardComponent(props) {
  const { advertImageURL } = props;
  return (
    <AdvertCardLayout advertImageURL={advertImageURL}>
      <AdvertInfoCardLayout>
        <AdvertInfoCardText tid="ADVERT.ADVERT_INFO" />
      </AdvertInfoCardLayout>
    </AdvertCardLayout>
  );
}

const AdvertCardLayout = styled.div`
  height: 222px;
  padding: ${spacing(4)};
  background: ${(props) => `no-repeat center url(${props.advertImageURL})`};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
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
