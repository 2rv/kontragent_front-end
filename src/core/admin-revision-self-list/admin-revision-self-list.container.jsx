import React from 'react';
import { httpRequest } from '../../main/http';
import { ADMIN_REVISION_SELF_LIST_API } from './admin-revision-self-list.constant';
import { convertAdminRevisionSelfList } from './admin-revision-self-list.convert';
import { AdminRevisionSelfListComponent } from './admin-revision-self-list.component';

export function AdminRevisionSelfListContainer() {
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  React.useEffect(() => {
    getAdminRevisionSelfList();
  }, []);

  const getAdminRevisionSelfList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: ADMIN_REVISION_SELF_LIST_API.GET_REVISION_LIST.TYPE,
        url: ADMIN_REVISION_SELF_LIST_API.GET_REVISION_LIST.ENDPOINT,
      });
      const data = convertAdminRevisionSelfList(res.data);

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
    <AdminRevisionSelfListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
