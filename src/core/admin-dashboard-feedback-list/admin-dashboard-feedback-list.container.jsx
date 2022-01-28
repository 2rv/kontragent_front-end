import { useReducer, useEffect } from 'react';
import { httpRequest } from '../../main/http';
import { performFeedbackAdminListRowData } from './admin-dashboard-feedback-list.convert';
import { FEEDBACK_ADMIN_LIST_API } from './admin-dashboard-feedback-list.constant';
import { AdminDashboardFeedbackListComponent } from './admin-dashboard-feedback-list.component';

const initialState = {
  pending: false,
  data: [],
  error: undefined,
};

function adminDashboardFeedbackListReducer(state, action) {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        pending: true,
        data: [],
        error: undefined,
      };

    case 'SUCCESS':
      return {
        ...state,
        pending: false,
        data: action.data,
      };

    case 'ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function AdminDashboardFeedbackListContainer() {
  const [state, setState] = useReducer(
    adminDashboardFeedbackListReducer,
    initialState,
  );

  useEffect(() => {
    getFeedbackListAction();
  }, []);

  const getFeedbackListAction = async () => {
    setState({
      type: 'PENDING',
    });
    try {
      const res = await httpRequest({
        method: FEEDBACK_ADMIN_LIST_API.GET_FEEDBACK_ADMIN_LIST.TYPE,
        url: FEEDBACK_ADMIN_LIST_API.GET_FEEDBACK_ADMIN_LIST.ENDPOINT,
      });
      setState({
        type: 'SUCCESS',
        data: performFeedbackAdminListRowData(res.data),
      });
    } catch (error) {
      if (error.response) {
        setState({
          type: 'ERROR',
          error: error.response.data.errorMessage,
        });
      }
    }
  };

  return <AdminDashboardFeedbackListComponent state={state} />;
}
