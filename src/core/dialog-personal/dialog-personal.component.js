import styled from 'styled-components';
import { DialogUserListContainer, DialogMessageListContainer } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function DialogPersonalComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogPersonalUserListData,
    dialogPersonalMessageListData,
    dialogPersonalCurrentInfo,
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
          dialogPersonalUserListData={dialogPersonalUserListData}
        />
        <DialogMessageListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          dialogPersonalCurrentInfo={dialogPersonalCurrentInfo}
          dialogPersonalMessageListData={dialogPersonalMessageListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 400px minmax(400px, 1fr);
`;
