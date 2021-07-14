import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';
import { SecondarySelect } from '../../../../lib/elements/field';

const options = [
  { id: 1, tid: 'Сначала новые' },
  { id: 2, tid: 'Сначала старые' },
  { id: 3, tid: 'Сначала лучшие' },
];
export function ArbitrationCardItemComponent() {
  return (
    <Container>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.ARBITRATION" />
        <SecondarySelect option={options} />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <ConterpartiesList>
          <DialogList>Заглушка сюда нужен список диалогов</DialogList>
        </ConterpartiesList>
        <ShowMoreButton tid="DASHBOARD_CARD.SHOW_MORE" />
      </ContentCase>
    </Container>
  );
}
const Container = styled.div``;
const DialogList = styled.div`
  height: 172px;
  width: 100%;
  background-color: bisque;
`;
const ShowMoreButton = styled(TextButton)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: 16px;
  display: grid;
  width: 100%;
  justify-content: center;
`;
const ConterpartiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const ContentCase = styled.div`
  display: grid;
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
