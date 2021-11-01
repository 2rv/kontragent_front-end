import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE } from './company-account-item-member-add.constant';
import {
    initRequestState,
    setRequestPending,
    setRequestSuccess,
    setRequestError,
} from '../../main/store/store.service';

const initialState = {
    form: initRequestState(),
};

export function companyAccountItemMemberAddStore(state = initialState, action) {
    switch (action.type) {
        case COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_PENDING:
            return {
                ...state,
                form: setRequestPending(state.form),
            };

        case COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_SUCCESS:
            return {
                ...state,
                form: setRequestSuccess(state.form),
            };

        case COMPANY_ACCOUNT_ITEM_MEMBER_ADD_ACTION_TYPE.ADD_ERROR:
            return {
                ...state,
                form: setRequestError(state.form, action.errorMessage),
            };

        default:
            return state;
    }
}
