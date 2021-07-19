import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { ReviewsListComponent } from './frame/reviews-list';

import { REVIEWS_LIST } from './reviews.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { ReviewsCommentComponent } from './frame/reviews-comment';
import { spacing } from '../../../../lib/theme';

export function ReviewsComponent() {
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.REVIEWS.HEADER.TITLE"
        companyType="COUNTERPARTY.REVIEWS.HEADER.COMPANY_TYPE"
        companyName={'"Компания Гермес-Электро"'}
      />
      <ReviewsListComponent reviewsList={REVIEWS_LIST} />
      <ReviewsCommentComponent />
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
  gap: ${spacing(6)};
`;
