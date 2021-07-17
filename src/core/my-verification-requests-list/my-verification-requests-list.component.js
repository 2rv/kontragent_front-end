import styled from 'styled-components';
import {
  MyVerificationHeaderContainer,
  MyVerificationListContainer,
} from './frame';
import { spacing } from '../../lib/theme';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MyVerificationRequestsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myVerificationListData,
    myVerificationSelectOption,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <MyVerificationHeaderContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          myVerificationSelectOption={myVerificationSelectOption}
        />
        <MyVerificationListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          myVerificationListData={myVerificationListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
