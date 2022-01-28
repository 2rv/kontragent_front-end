import { httpRequest } from '../../main/http';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_ACTION_TYPE } from './company-account-item-kontragent-item-review-list.constant';
import { convertCompanyAccountItemKontragentItemReviewListData } from './company-account-item-kontragent-item-review-list.convert';

export async function getCompanyAccountItemKontragentItemReviewList(
  dispatch,
  companyId,
) {
  dispatch({
    type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_ACTION_TYPE.REQUEST_PENDING,
  });

  try {
    const res = await httpRequest({
      method: 'GET',
      url: `/review/get/${companyId}`,
    });

    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_ACTION_TYPE.REQUEST_SUCCESS,
      data: convertCompanyAccountItemKontragentItemReviewListData(res.data),
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    if (error.response) {
      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_ACTION_TYPE.REQUEST_ERROR,
        errorMessage: error.response.data.message,
      });
    }
  }
}
