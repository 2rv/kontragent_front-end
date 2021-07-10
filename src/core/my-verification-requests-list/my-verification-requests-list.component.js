import styled from 'styled-components';
import { MyVerificationListContainer } from './frame';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function MyVerificationRequestsListComponent(props) {
  const { myVerificationListData, myVerificationSelectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="MY_VERIFICATION_REQUESTS_LIST.TITLE"
        selectOption={myVerificationSelectOption}
        placeholderTid="MY_VERIFICATION_REQUESTS_LIST.FIELD.FIND_VERIFICATION"
      >
        <PaginationCase>
          <Button tid="1" pageActived={true} />
          <Button tid="2" />
          <Button tid="3" />
          <Button tid="4" />
        </PaginationCase>
      </FilterComponent>
      <MyVerificationListContainer
        myVerificationListData={myVerificationListData}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
const PaginationCase = styled.div`
  display: flex;
  gap: ${spacing(3.5)};
`;
const Button = styled(SecondaryButton)`
  background-color: ${({ pageActived }) =>
    !pageActived && THEME_COLOR.COLOR.BASE};
  color: ${({ pageActived }) => !pageActived && THEME_COLOR.COLOR.PRIMARY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
