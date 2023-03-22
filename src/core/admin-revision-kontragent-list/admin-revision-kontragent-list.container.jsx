import React from 'react';
import { httpRequest } from '../../main/http';
import { ADMIN_REVISION_KONTRAGENT_LIST_API } from './admin-revision-kontragent-list.constant';
import { convertAdminRevisionKontragentList } from './admin-revision-kontragent-list.convert';
import { AdminRevisionKontragentListComponent } from './admin-revision-kontragent-list.component';

export function AdminRevisionKontragentListContainer() {
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  React.useEffect(() => {
    getAdminRevisionKontragentList();
  }, []);

  const getAdminRevisionKontragentList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: ADMIN_REVISION_KONTRAGENT_LIST_API.GET_REVISION_LIST.TYPE,
        url: ADMIN_REVISION_KONTRAGENT_LIST_API.GET_REVISION_LIST.ENDPOINT,
      });
      const data = convertAdminRevisionKontragentList(res.data);

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

  return (
    <AdminRevisionKontragentListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
