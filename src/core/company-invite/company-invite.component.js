import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { PrimaryLoader } from '../../lib/elements/loader';
import {
  CompanyInviteHeaderContainer,
  CompanyInviteListContainer,
} from './frame';

export function CompanyInviteComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    companyInviteSelectOption,
    companyInviteListData,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <CompanyInviteHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          companyInviteSelectOption={companyInviteSelectOption}
        />
        <CompanyInviteListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          companyInviteListData={companyInviteListData}
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
