import React from 'react';
import { RevisionAdminListComponent } from './revision-admin-list.component';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { httpRequest } from '../../main/http';
import { REVISION_ADMIN_LIST_API } from './revision-admin-list.constant';
export { performRevisionAdminListRowData } from './revision-admin-list.convert';

export function RevisionAdminListContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

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
      const data = res.data;
      console.log(`PERFORMED DATA: ${JSON.stringify(data)}`);

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
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
