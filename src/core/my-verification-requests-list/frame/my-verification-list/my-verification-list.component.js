import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { MyVerificationListItemComponent } from './my-verification-list-item.component';

export function MyVerificationListComponent(props) {
  const { myVerificationListData } = props;
  return (
    <Container>
      {myVerificationListData.map((data, index) => (
        <MyVerificationListItemComponent key={index} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
