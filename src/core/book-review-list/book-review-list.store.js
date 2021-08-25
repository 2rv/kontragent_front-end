import { BOOK_REVIEW_LIST_ACTION_TYPE } from './book-review-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  bookReviewList: initRequestState(),
};

export function bookReviewListStore(state = initialState, action) {
  switch (action.type) {
    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        bookReviewList: setRequestPending(state.bookReviewList),
      };

    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        bookReviewList: setRequestSuccess(state.bookReviewList, action.data),
      };

    case BOOK_REVIEW_LIST_ACTION_TYPE.BOOK_REVIEW_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        bookReviewList: setRequestError(
          state.bookReviewList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
