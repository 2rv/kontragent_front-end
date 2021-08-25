import { httpRequest } from '../../main/http';
import { COMPANY_INVITE_ACTION_TYPE } from './company-invite.type';
import { COMPANY_INVITE_API } from './company-invite.constant';
import { performCompanyInviteDataList } from './company-invite.convert';

export function companyInviteLoadDataAction() {
  return async (dispatch) => {
    // dispatch({
    //   type: COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_PENDING,
    // });
    // try {
    //   const res = await httpRequest({
    //     method: COMPANY_INVITE_API.COMPANY_INVITE_LOAD_DATA.TYPE,
    //     url: COMPANY_INVITE_API.COMPANY_INVITE_LOAD_DATA.ENDPOINT,
    //   });
    //   const data = performCompanyInviteDataList(res.data);
    //   dispatch({
    //     type: COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_SUCCESS,
    //     data: data,
    //   });
    // } catch (error) {
    //   if (error) {
    //     dispatch({
    //       type: COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_ERROR,
    //       errorMessage: error.response.data.message,
    //     });
    //   }
    // }
  };
}
