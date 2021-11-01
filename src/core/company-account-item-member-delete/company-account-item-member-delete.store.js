import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE } from './company-account-item-member-delete.constant';
import {
    initRequestState,
    setRequestPending,
    setRequestSuccess,
    setRequestError,
} from '../../main/store/store.service';

const initialState = {
    form: initRequestState(),
    deletedItemIndex: null,
};

export function companyAccountItemMemberDeleteStore(state = initialState, action) {
    switch (action.type) {
        case COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_PENDING:
            return {
                ...state,
                form: setRequestPending(state.form),
            };

        case COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_SUCCESS:
            return {
                ...state,
                form: setRequestSuccess(state.form),
                deletedItemIndex: action.payload,
            };

        case COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.DELETE_ERROR:
            return {
                ...state,
                form: setRequestError(state.form, action.errorMessage),
            };

        default:
            return state;
    }
}
