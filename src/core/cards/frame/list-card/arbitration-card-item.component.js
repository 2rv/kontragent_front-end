import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';
import { SecondarySelect } from '../../../../lib/elements/field';
import { CardBody } from '../card-body';

const options = [
  { id: 1, tid: 'Сначала новые' },
  { id: 2, tid: 'Сначала старые' },
  { id: 3, tid: 'Сначала лучшие' },
];
export function ArbitrationCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.ARBITRATION" />}
      action={<SecondarySelect option={options} />}
      content={
        <Column>
          <ConterpartiesList>
            <DialogList>Заглушка сюда нужен список диалогов</DialogList>
          </ConterpartiesList>
          <ShowMoreButton tid="DASHBOARD_CARD.SHOW_MORE" />{' '}
        </Column>
      }
    />
  );
}
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
`;
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

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
