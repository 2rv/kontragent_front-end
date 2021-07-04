import { MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE } from './my-companies-review-company-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  reviewCompanyList: initRequestState(),
};

export function MyCompaniesReviewCompanyListStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_PENDING:
      return {
        ...state,
        reviewCompanyList: setRequestPending(state.reviewCompanyList),
      };

    case MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_SUCCESS:
      return {
        ...state,
        reviewCompanyList: setRequestSuccess(
          state.reviewCompanyList,
          action.data,
        ),
      };

    case MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_ERROR:
      return {
        ...state,
        reviewCompanyList: setRequestError(
          state.reviewCompanyList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
