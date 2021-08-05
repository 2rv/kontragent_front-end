import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';
import { CardBody } from '../card-body';

export function ApplicationCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.IMPORTANT_DIALOGUES" />}
      action={<FindIcon />}
      content={<DialogList>Заглушка сюда нужен список диалогов</DialogList>}
    />
  );
}

const DialogList = styled.div`
  height: 266px;
  width: 100%;
  background-color: bisque;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
