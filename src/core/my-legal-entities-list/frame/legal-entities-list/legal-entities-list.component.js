import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { LegalEntitiesListItem } from './legal-entities-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question-icon.svg';

export function LegalEntitiesListComponent(props) {
  const { myLegalEntitiesListData } = props;
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText tid="Юр.лицо" />
        <SecondaryText tid="Книги" />
        <SecondaryText tid="Контрагентов" />
        <SecondaryText tid="Оборот" />
        <LineCase>
          <SecondaryText tid="Доначисления" />
          <QuestionIcon />
        </LineCase>
        <SecondaryText tid="Риски" />
        <SecondaryText tid="Народный рейтинг" />
        <SecondaryText tid="Пени" />
        <SecondaryText tid="Штрафы" />
      </Columns>
      <Divider />
      {myLegalEntitiesListData.map((data, index) => (
        <LegalEntitiesListItem key={index} data={data} />
      ))}
    </SectionLayout>
  );
}
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 3fr 4fr 4fr 1fr 3fr 2fr 3fr;
  gap: ${spacing(4)};
`;

const InfoButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.BASE};
  font-size: ${THEME_SIZE.FONT.TINY};
  margin-left: ${spacing(2)};
`;
