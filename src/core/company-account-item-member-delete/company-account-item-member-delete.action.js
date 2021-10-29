import { httpRequest } from "../../main/http";
import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE } from './company-account-item-member-delete.constant'
import { getQuery } from '../../main/navigation/index';

export function CompanyAccountItemMemberDelete(memberId, itemIndex) {
    return async (dispatch) => {
        dispatch({
            type: COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_PENDING,
        })

        try {
            await httpRequest({
                method: 'DELETE',
                url: `/company-member/company/${getQuery('companyId')}/member/${memberId}`,
            });

            dispatch({
                type: COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_SUCCESS,
                payload: itemIndex,
            })

        } catch (error) {
            if (error) {
                dispatch({
                    type: COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_ERROR,
                    errorMessage: error.response.data.message,
                })
            }
        }
    }
}