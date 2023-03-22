import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation';

import { convertCompanyAccountItemKontragentItemRevisionListData } from './company-account-item-kontragent-item-revision-list.convert';
import { CompanyAccountItemKontragentItemRevisionListComponent } from './company-account-item-kontragent-item-revision-list.component';

export function CompanyAccountItemKontragentItemRevisionListContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getCompanyAccountItemKontragentItemRevisionList();
  }, []);
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const getCompanyAccountItemKontragentItemRevisionList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const companyId = getQuery('companyId');
      const kontragentId = getQuery('kontragentId');
      const res = await httpRequest({
        method: 'GET',
        url: `/revision/company/${companyId}/kontragent/${kontragentId}`,
      });

      const data = convertCompanyAccountItemKontragentItemRevisionListData(
        res.data,
      );

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
    <CompanyAccountItemKontragentItemRevisionListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
