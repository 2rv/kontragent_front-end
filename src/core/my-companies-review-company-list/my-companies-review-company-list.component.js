import {
  ReviewCompanyListContainer,
  ReviewCompanyListFooterContainer,
  MyCompaniesHeaderContainer,
} from './frame';
import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MyCompaniesReviewCompanyListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myCompaniesSelectOption,
    myCompaniesListData,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <MyCompaniesHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myCompaniesSelectOption={myCompaniesSelectOption}
        />
        <ReviewCompanyListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myCompaniesListData={myCompaniesListData}
        />
        <ReviewCompanyListFooterContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(4)};
`;
