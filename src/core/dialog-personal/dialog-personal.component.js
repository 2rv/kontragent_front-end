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
  display: flex;
  flex-grow: 1;
  min-height: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;
