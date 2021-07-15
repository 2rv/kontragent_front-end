import { httpRequest } from '../../main/http';

import { COMPANY_MEMBERS_ACTION_TYPE } from './company-members.type';
import { COMPANY_MEMBERS_API } from './company-members.constant';

export function companyMembersListLoad() {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COMPANY_MEMBERS_API.COMPANY_MEMBERS_LOAD_DATA.TYPE,
        url: COMPANY_MEMBERS_API.COMPANY_MEMBERS_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
