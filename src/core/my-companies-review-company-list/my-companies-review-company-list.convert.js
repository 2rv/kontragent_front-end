import {
  MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY,
  MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME,
} from './my-companies-review-company-list.type';

const getUserRole = (roleId) => {
  switch (roleId) {
    case 1:
      return 'Основатель';
    case 2:
      return 'Менеджер';
    default:
      return 'Менеджер';
  }
};

export const performReviewCompanyList = (rawdata) => {
  return rawdata.map((e) => {
    return {
      [MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME.COMPANY_ID]:
        e[MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.COMPANY_ID],

      [MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME.COMPANY_NAME]:
        e[MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.COMPANY_NAME],

      [MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME.USER_ROLE]: getUserRole(
        e[MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.COMPANY_USER][0][
          MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.USER_ROLE
        ],
      ),

      [MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME.CREATE_DATE]:
        e[MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.COMPANY_USER][0][
          MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_KEY.CREATE_DATE
        ],
    };
  });
};
