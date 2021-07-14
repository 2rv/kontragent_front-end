import styled from 'styled-components';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';
import { SupportRequestListItemComponent } from './support-requests-list-item.component';

export function SupportRequestsListComponent(props) {
  const { mySupportRequestsListData } = props;
  return (
    <Container>
      <RequestsText tid="Запросы" />
      {mySupportRequestsListData.map((data, index) => (
        <SupportRequestListItemComponent key={index} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;

const RequestsText = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
