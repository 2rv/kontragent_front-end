import React from 'react';
import { RevisionAdminListComponent } from './revision-admin-list.component';
import { httpRequest } from '../../main/http';
import { REVISION_ADMIN_LIST_API } from './revision-admin-list.constant';
import { performRevisionAdminListRowData } from './revision-admin-list.convert';
export { performRevisionAdminListRowData } from './revision-admin-list.convert';

export function RevisionAdminListContainer() {

  React.useEffect(() => {
    getRevisionAdminList();
  }, []);

  const getRevisionAdminList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: REVISION_ADMIN_LIST_API.GET_REVISION_ADMIN_LIST.TYPE,
        url: REVISION_ADMIN_LIST_API.GET_REVISION_ADMIN_LIST.ENDPOINT,
      });
      const data = performRevisionAdminListRowData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <RevisionAdminListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
