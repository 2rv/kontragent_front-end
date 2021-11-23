import { httpRequest } from '../../main/http';

import { INVITE_API, INVITE_ACTION_TYPE } from './invite.constant';

import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

export function uploadInviteForm(data) {
  return async (dispatch) => {
    dispatch({
      type: INVITE_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: INVITE_API.INVITE.TYPE,
        url: INVITE_API.INVITE.ENDPOINT,
        data,
      });
      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: INVITE_ACTION_TYPE.FORM_SUCCESS,
      });
      redirect('/');
    } catch (error) {
      if (error) {
        dispatch({
          type: INVITE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: INVITE_ACTION_TYPE.FORM_CLEANUP,
  };
}
