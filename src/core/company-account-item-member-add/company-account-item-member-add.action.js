import { httpRequest } from '../../main/http';
import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE } from './company-account-item-member-add.constant';
import { getQuery } from '../../main/navigation/index';

export function CompanyAccountItemMemberAdd(data) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_PENDING,
    });

    try {
      await httpRequest({
        method: 'POST',
        url: `/company-member/company/${getQuery('companyId')}/member/user/${
          data.id
        }`,
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_CLEANUP,
  };
}
