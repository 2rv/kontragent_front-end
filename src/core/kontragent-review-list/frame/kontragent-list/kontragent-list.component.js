import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { KontragentListItem } from './kontragent-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
export function KontragentListComponent(props) {
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText>Проверка</SecondaryText>
        <SecondaryText>Контрагент</SecondaryText>
        <SecondaryText>Ваше юр. лицо</SecondaryText>
        <SecondaryText>Оборот</SecondaryText>
        <SecondaryText>
          Доначисления<InfoButton>?</InfoButton>
        </SecondaryText>
        <SecondaryText>Риски</SecondaryText>
        <SecondaryText>Ваша оценка</SecondaryText>
        <SecondaryText>Народный рейтинг</SecondaryText>
      </Columns>
      {props.kontragentListData.map((inspectionRequest, index) => (
        <KontragentListItem
          key={index}
          approved={inspectionRequest.approved}
          company={inspectionRequest.company}
          userCompany={inspectionRequest.userCompany}
          turnover={inspectionRequest.turnover}
          addCharges={inspectionRequest.addCharges}
          risks={inspectionRequest.risks}
          userRating={inspectionRequest.userRating}
          generalRating={inspectionRequest.generalRating}
        />
      ))}
    </SectionLayout>
  );
}

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 3fr 3fr 1fr 2fr 3fr;
  grid-column-gap: ${spacing(4)};
`;

const InfoButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.BASE};
  font-size: ${THEME_SIZE.FONT.TINY};
  margin-left: ${spacing(2)};
`;
