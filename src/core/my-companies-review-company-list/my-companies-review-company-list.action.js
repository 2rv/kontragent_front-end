import { httpRequest } from '../../main/http';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE } from './my-companies-review-company-list.type';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_API } from './my-companies-review-company-list.constant';
import { performReviewCompanyList } from './my-companies-review-company-list.convert';

export function myCompaniesLoadCompaniesData() {
  return async (dispatch) => {
    dispatch({
      type: MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_COMPANIES_REVIEW_COMPANY_LIST_API
            .REVIEW_COMPANY_LIST_LOAD_COMPANIES.TYPE,
        url: MY_COMPANIES_REVIEW_COMPANY_LIST_API
          .REVIEW_COMPANY_LIST_LOAD_COMPANIES.ENDPOINT,
      });

      const data = performReviewCompanyList(res.data);
      dispatch({
        type: MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_SUCCESS,
        data: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_COMPANIES_REVIEW_COMPANY_LIST_ACTION_TYPE.MY_COMPANIES_REVIEW_COMPANY_LIST_LOAD_COMPANIES_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
