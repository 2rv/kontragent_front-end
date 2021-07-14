import { ReviewCompanyListContainer } from './frame/review-company-list';
import { ReviewCompanyListFooterContainer } from './frame/review-company-list-footer';
import styled from 'styled-components';
import { spacing } from '../../lib/theme';

export function MyCompaniesReviewCompanyListComponent(props) {
  return (
    <Container>
      <ReviewCompanyListContainer />
      <ReviewCompanyListFooterContainer />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
