import React from 'react';
import { httpRequest } from '../../main/http';
import { performAdminPostListRowData } from './admin-post-list.convert';
import { ADMIN_POST_LIST_API } from './admin-post-list.constant';
import { AdminPostListComponent } from './admin-post-list.component';

export function AdminPostListContainer() {
  React.useEffect(() => {
    getAdminPostList();
  }, []);

  const getAdminPostList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: ADMIN_POST_LIST_API.GET_ADMIN_POST_LIST.TYPE,
        url: ADMIN_POST_LIST_API.GET_ADMIN_POST_LIST.ENDPOINT,
      });

      const data = performAdminPostListRowData(res.data);

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
    <AdminPostListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
