import { httpRequest } from '../../main/http';
import { MY_LAWYER_REQUEST_LIST_ACTION_TYPE } from './my-lawyer-request-list.type';
import { MY_LAWYER_REQUEST_LIST_API } from './my-lawyer-request-list.constant';

export function myLawyerRequestListLoadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
