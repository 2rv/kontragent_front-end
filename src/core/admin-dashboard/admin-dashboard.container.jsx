import { useReducer } from 'react';
import { httpRequest } from '../../main/http';
import { AdminDashboardComponent } from './admin-dashboard.component';

const initialState = {
  pending: false,
  error: undefined,
  data: [],
};

function adminDashboardReducer(state, action) {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        pending: true,
        error: undefined,
      };

    case 'SUCCESS':
      return {
        ...state,
        pending: false,
        success: true,
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

export function AdminDashboardContainer() {
  const [state, setState] = useReducer(adminDashboardReducer, initialState);

  async function getDashboardInfoAction(data) {
    setState({ type: 'PENDING' });
    try {
      await httpRequest({
        method: 'POST',
        url: '/kontragent/import/' + companyId,
        data: { kontragents: data },
      });
      setState({ type: 'SUCCESS' });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setState({ type: 'ERROR', error: error.response.data.message });
      }
    }
  }

  return <AdminDashboardComponent />;
}
