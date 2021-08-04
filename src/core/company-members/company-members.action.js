import { httpRequest } from '../../main/http';

import { COMPANY_MEMBERS_ACTION_TYPE } from './company-members.type';
import { COMPANY_MEMBERS_API } from './company-members.constant';
import {
  performCompanyMembers,
  performCompanyInfo,
} from './company-members.convert';

export function companyMembersListLoad(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COMPANY_MEMBERS_API.COMPANY_MEMBERS_LOAD_DATA.TYPE,
        url: COMPANY_MEMBERS_API.COMPANY_MEMBERS_LOAD_DATA.ENDPOINT(companyId),
      });

      const data = performCompanyMembers(res.data);

      dispatch({
        type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_SUCCESS,
        data,
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

export function getCompanyInfo(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COMPANY_MEMBERS_API.COMPANY_INFO_LOAD_DATA.TYPE,
        url: COMPANY_MEMBERS_API.COMPANY_INFO_LOAD_DATA.ENDPOINT(companyId),
      });

      const data = performCompanyInfo(res.data);

      dispatch({
        type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_INFO_LOAD_REQUEST_SUCCESS,
        data,
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

export function removeUserOutCompany(companyId, userId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COMPANY_MEMBERS_API.DELETE_USER_COMPANY.TYPE,
        url: COMPANY_MEMBERS_API.DELETE_USER_COMPANY.ENDPOINT(
          companyId,
          userId,
        ),
      });
      console.log(res);
      //   const data = performCompanyInfo(res.data);
      //   dispatch({
      //     type: COMPANY_MEMBERS_ACTION_TYPE.DELETE_USER_COMPANY_REQUEST_SUCCESS,
      //     data,
      //   });
    } catch (error) {
      if (error) {
        console.log(error);
        dispatch({
          type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function userAddInCompany(companyId, userId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COMPANY_MEMBERS_API.COMPANY_ADD_USER.TYPE,
        url: COMPANY_MEMBERS_API.COMPANY_ADD_USER.ENDPOINT(companyId),
      });
      console.log(res.data);
      //   const data = performCompanyInfo(res.data);
      //   dispatch({
      //     type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_ADD_USER_REQUEST_SUCCESS,
      //     data,
      //   });
    } catch (error) {
      if (error) {
        console.log(error);
        dispatch({
          type: COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
