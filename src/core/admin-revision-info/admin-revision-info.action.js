import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_REVISION_INFO_ACTION_TYPE } from './admin-revision-info.constant';
import { performAdminRevisionInfoData } from './admin-revision-info.convert';

export function getAdminRevisionInfo() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision/admin/revision/${getQuery('revisionId')}/review`,
      });
      const data = performAdminRevisionInfoData(res.data);
      dispatch({
        type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function reloadAdminRevisionInfoData() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_UPDATE_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision/admin/revision/${getQuery('revisionId')}/review`,
      });
      const data = performAdminRevisionInfoData(res.data);

      dispatch({
        type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
