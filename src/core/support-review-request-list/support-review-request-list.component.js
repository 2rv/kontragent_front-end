import styled from 'styled-components';
import { SupportRequestListContainer } from './frame';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function SupportReviewRequestListComponent(props) {
  const { supportRequestListData, selectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="SUPPORT.SUPPORT_REQUEST"
        selectOption={selectOption}
        placeholderTid="SUPPORT.FIND_DIALOGS_OR_MESSAGE"
      >
        <PaginationCase>
          <Button tid="1" pageActived={true} />
          <Button tid="2" />
          <Button tid="3" />
          <Button tid="4" />
        </PaginationCase>
      </FilterComponent>
      <SupportRequestListContainer
        supportRequestListData={supportRequestListData}
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
