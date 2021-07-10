import styled from 'styled-components';
import { SupportRequestsListContainer } from './frame';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function MySupportRequestsListComponent(props) {
  const { mySupportRequestsListData, mySupportRequestsListSelectOption } =
    props;
  return (
    <Container>
      <FilterComponent
        titleTid="SUPPORT.SUPPORT_REQUESTS.TITLE"
        selectOption={mySupportRequestsListSelectOption}
        placeholderTid="SUPPORT.SUPPORT_REQUESTS.FIELD.FIND_DIALOG_OR_MESSAGE"
      >
        <PaginationCase>
          <Button tid="SUPPORT.SUPPORT_REQUESTS.BUTTON.NEW_REQUEST" />
        </PaginationCase>
      </FilterComponent>
      <SupportRequestsListContainer
        mySupportRequestsListData={mySupportRequestsListData}
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
  width: 226px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
