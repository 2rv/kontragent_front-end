import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';

export function DialogsCardItemComponent() {
  return (
    <Сontent>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.ARBITRATION_DIALOGUES" />
        <FindIcon />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <DialogList>
          Здесь нужен список диалогов какой не знаю скорее всего арбитража Взять
          из arbitration
        </DialogList>
      </ContentCase>
    </Сontent>
  );
}

const DialogList = styled.div`
  height: 264px;
  width: 100%;
  background-color: purple;
`;
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Сontent = styled(PrimaryBox)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding: ${spacing(4)};
`;
