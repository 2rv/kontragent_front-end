import { BOOK_REVIEW_LIST_ACTION_TYPE } from './book-review-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  bookReviewListData: initRequestState(),
};

export function bookReviewListStore(state = initialState, action) {
  switch (action.type) {
    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_GET_DATA_REQUEST_PENDING:
      return {
        ...state,
        bookReviewListData: setRequestPending(state.bookReviewListData),
      };

    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_GET_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        bookReviewListData: setRequestSuccess(
          state.bookReviewListData,
          action.data,
        ),
      };

    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_GET_DATA_REQUEST_ERROR:
      return {
        ...state,
        bookReviewListData: setRequestError(
          state.bookReviewListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
