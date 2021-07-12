import { BOOK_REVIEW_LIST_ACTION_TYPE } from './book-review-list.type';

export function bookReviewListLoad() {
  return async (dispatch) => {
    dispatch({
      type: BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_SUCCESS,
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
