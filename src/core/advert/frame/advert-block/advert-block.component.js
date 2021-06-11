import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SecondaryText } from '../../../../lib/elements/text';

export function AdvertBlockComponent(props) {
  const { advertImageURL } = props;
  return (
    <AdvertBlockLayout advertImageURL={advertImageURL}>
      <AdvertInfoCardLayout>
        <AdvertInfoCardText tid="ADVERT.ADVERT_INFO" />
      </AdvertInfoCardLayout>
    </AdvertBlockLayout>
  );
}

const AdvertBlockLayout = styled.div`
  height: 286px;
  width: 100%;
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
