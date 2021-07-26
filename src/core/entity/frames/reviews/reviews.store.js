import { REVIEWS_ACTION_TYPE } from './reviews.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  reviews: initRequestState(),
};

export function entityReviewsStore(state = initialState, action) {
  switch (action.type) {
    case REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_PENDING:
      return {
        ...state,
        reviews: setRequestPending(state.reviews),
      };

    case REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        reviews: setRequestSuccess(state.reviews, action.data),
      };

    case REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_ERROR:
      return {
        ...state,
        reviews: setRequestError(
          state.reviews,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
