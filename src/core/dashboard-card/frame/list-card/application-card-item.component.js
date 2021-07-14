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

export function ApplicationCardItemComponent() {
  return (
    <Container>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.IMPORTANT_DIALOGUES" />
        <Button>
          <FindIcon />
        </Button>
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <DialogList>Заглушка сюда нужен список диалогов</DialogList>
      </ContentCase>
    </Container>
  );
}
const Container = styled.div``;
const Button = styled(PrimaryButton)`
  width: 40px;
  height: 40px;
  padding: ${spacing(2.5)};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;
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
