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
import { IconButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';

export function ApplicationCardItemComponent() {
  return (
    <Сontent>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.IMPORTANT_DIALOGUES" />
        <IconButton icon={FindIcon} />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <DialogList>Заглушка сюда нужен список диалогов</DialogList>
      </ContentCase>
    </Сontent>
  );
}

const DialogList = styled.div`
  height: 266px;
  width: 100%;
  background-color: bisque;
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
  align-items: center;
`;
const Сontent = styled(PrimaryBox)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(4)};
  box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);
`;
