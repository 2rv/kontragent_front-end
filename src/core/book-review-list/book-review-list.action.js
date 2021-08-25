import { httpRequest } from '../../main/http';

import { BOOK_REVIEW_LIST_ACTION_TYPE } from './book-review-list.type';
import { BOOK_REVIEW_LIST_API } from './book-review-list.constant';

export function bookReviewListLoad() {
  return async (dispatch) => {
    dispatch({
      type: BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BOOK_REVIEW_LIST_API.BOOK_REVIEW_LIST_LOAD_DATA.TYPE,
        url: BOOK_REVIEW_LIST_API.BOOK_REVIEW_LIST_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
