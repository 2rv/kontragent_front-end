import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_DATA_NAME } from './company-account-item-kontragent-item-review-list.constant';

export function convertCompanyAccountItemKontragentItemReviewListData(d) {
  return d.list.map((revision) => ({
    [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_DATA_NAME.ID]:
      revision[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_DATA_NAME.ID],
    [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_DATA_NAME.COMPANY]:
      revision[
        COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVIEW_LIST_DATA_NAME.COMPANY
      ],
  }));
}
