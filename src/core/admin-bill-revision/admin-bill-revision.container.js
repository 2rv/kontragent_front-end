import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  resetAdminBillRevisionUpdateDataFromState,
  changeAdminBillRevision,
  closeAdminBillRevision,
  deleteAdminBillRevision,
  cleanupStore,
} from './admin-bill-revision.action';
import {
  ADMIN_BILL_REVISION_DATA_NAME,
  ADMIN_BILL_REVISION_STORE_NAME,
} from './admin-bill-revision.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ADMIN_BILL_INFO_STORE_NAME } from '../admin-bill-info/admin-bill-info.constant';
import { AdminBillRevisionComponent } from './admin-bill-revision.component';
import { convertAdminBillRevisionSendData } from './admin-bill-revision.convert';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AdminBillRevisionContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, billData } = useSelector((state) => ({
    state: state[ADMIN_BILL_REVISION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    billData: state[ADMIN_BILL_INFO_STORE_NAME],
  }));

  React.useEffect(() => {
    dispatch(resetAdminBillRevisionUpdateDataFromState());
  }, []);

  React.useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  const createBillRevision = (values, resetForm) => {
    const data = convertAdminBillRevisionSendData(values, getFileList);
    dispatch(changeAdminBillRevision(data, resetForm));
  };

  const closeBillRevision = () => {
    dispatch(closeAdminBillRevision());
  };

  const deleteBillRevision = () => {
    dispatch(deleteAdminBillRevision());
  };

  const getInitialValue = () => {
    // if (isRequestSuccess(billData.bill)) {
    //   const data = getRequestData(billData.bill, '');

    //   return {
    //     [ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION]:
    //       data[ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION],
    //     [ADMIN_BILL_REVISION_DATA_NAME.FILES]:
    //       data[ADMIN_BILL_REVISION_DATA_NAME.FILES],
    //   };
    // }
    return {
      [ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION]: '',
      [ADMIN_BILL_REVISION_DATA_NAME.FILES]: [],
    };
  };
  const [getFileList, setFileList] = React.useState([]);
  return (
    <AdminBillRevisionComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      onSubmitForm={createBillRevision}
      isDependentPending={isRequestPending(billData.bill)}
      data={billData.bill}
      pageLoading={pageLoading}
      setFileList={setFileList}
      errorMessage={getRequestErrorMessage(state.form)}
      isClosePending={isRequestPending(state.closeForm)}
      isCloseSuccess={isRequestSuccess(state.closeForm)}
      isCloseError={isRequestError(state.closeForm)}
      isDeletePending={isRequestPending(state.deleteForm)}
      isDeleteSuccess={isRequestSuccess(state.deleteForm)}
      isDeleteError={isRequestError(state.deleteForm)}
      onSubmitClose={closeBillRevision}
      onSubmitDelete={deleteBillRevision}
    />
  );
}
