import { MY_COUNTERPARTIES_LIST_ACTION_TYPE } from './my-counterparties-list.type';

export function myCounterpartiesListLoad() {
  return async (dispatch) => {
    dispatch({
      type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_PENDING,
    });

    try {
      dispatch({
        type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
