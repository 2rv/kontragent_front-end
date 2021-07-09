import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { MyChecksListItemComponent } from './my-checks-list-item.component';

export function MyChecksListComponent(props) {
  const { itemsData } = props;
  return (
    <Container>
      {itemsData.map((inspectionRequest, index) => (
        <MyChecksListItemComponent
          key={index}
          company={inspectionRequest.company}
          inspectionTypeId={inspectionRequest.inspectionTypeId}
          inspectionType={inspectionRequest.inspectionType}
          sum={inspectionRequest.sum}
          date={inspectionRequest.date}
          inspectionStatusId={inspectionRequest.inspectionStatusId}
          inspectionStatus={inspectionRequest.inspectionStatus}
          payed={inspectionRequest.payed}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
