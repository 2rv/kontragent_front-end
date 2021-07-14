import { SectionLayout } from '../../../../lib/elements/layout';
import { ReviewCompanyListItem } from './review-company-list.item';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';

export function ReviewCompanyListComponent(props) {
  return (
    <Container>
      {[1, 2, 3].map((companyData, index) => (
        <ReviewCompanyListItem key={index} />
      ))}
    </Container>
  );
}
const Container = styled(SectionLayout)`
  gap: ${spacing(4.5)};
`;
