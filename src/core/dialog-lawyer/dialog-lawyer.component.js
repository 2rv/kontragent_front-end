import styled from 'styled-components';
import { DialogUserListContainer, DialogMessageListContainer } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function DialogLawyerComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogLawyersListData,
    dialogLawyerMessageListData,
    dialogLawyerCurrentInfo,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <DialogUserListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          dialogLawyersListData={dialogLawyersListData}
        />
        <DialogMessageListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          dialogLawyerMessageListData={dialogLawyerMessageListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;
