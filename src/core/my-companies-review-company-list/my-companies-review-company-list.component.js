import {
  MyCompaniesHeaderContainer,
  ReviewCompanyListContainer,
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
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  flex: 1;
  flex-flow: column;
`;
