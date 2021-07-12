import { MY_LEGAL_ENTITIES_LIST_ACTION_TYPE } from './my-legal-entities-list.type';

export function myLegalEntitiesListLoad() {
  return async (dispatch) => {
    dispatch({
      type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
