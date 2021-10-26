import React, { useState, useEffect } from 'react';
import { httpRequest } from '../../main/http';
import { USER_REFERAL_ACHIEVEMENT_LIST_API } from './user-referal-achievement-list.constant';
import { UserReferalAchievementComponent } from './user-referal-achievement-list.component';
import { performUserReferalAchievementListRowData } from './user-referal-achievement-list.conver';

export function UserReferalAchievementListContainer() {
  useEffect(() => {
    getUserAdminList();
  }, []);

  const getUserAdminList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method:
          USER_REFERAL_ACHIEVEMENT_LIST_API.GET_USER_REFERAL_ACHIEVEMENT_LIST
            .TYPE,
        url: USER_REFERAL_ACHIEVEMENT_LIST_API.GET_USER_REFERAL_ACHIEVEMENT_LIST
          .ENDPOINT,
      });
      const data = performUserReferalAchievementListRowData(res.data);

      setRequestPending(false), setRequestSuccess(true), setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = useState(null);
  const [getData, setData] = useState([]);
  const [isRequestError, setRequestError] = useState(null);
  const [isRequestSuccess, setRequestSuccess] = useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = useState(null);
  return (
    <UserReferalAchievementComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
