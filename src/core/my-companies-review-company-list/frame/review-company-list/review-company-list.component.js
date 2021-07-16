import { SectionLayout } from '../../../../lib/elements/layout';
import { ReviewCompanyListItem } from './review-company-list.item';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';

export function ReviewCompanyListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCompaniesListData,
  } = props;
  return (
    <SectionLayout>
      {myCompaniesListData.map((data, index) => (
        <ReviewCompanyListItem key={index} data={data} />
      ))}
    </SectionLayout>
  );
}
