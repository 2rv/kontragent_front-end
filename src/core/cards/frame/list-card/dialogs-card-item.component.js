import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find.svg';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message.svg';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { CircleDivider } from '../../../../lib/elements/divider';
import Image from 'next/image';
import { CardBody } from '../card-body';

export function DialogsCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.ARBITRATION_DIALOGUES" />}
      action={<Find />}
      content={null}
    />
  );
}
const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
