import { COMPANY_ADMIN_IMPORT_ACTION_TYPE as ACTION_TYPE } from './company-admin-import.constant';

export const initialState = {
  pending: false,
  success: false,
  error: undefined,
  xslxPending: false,
  xslxError: undefined,
  data: [],
  progress: 0,
  currentChunk: 0,
};

export function companyAdminImportReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: undefined,
        progress: 0,
      };

    case ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };

    case ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case ACTION_TYPE.FORM_PROGRESS:
      return {
        ...state,
        progress: action.data,
        currentChunk: action.currentChunk,
      };

    case ACTION_TYPE.XSLX_PENDING:
      return {
        ...state,
        xslxPending: true,
        xslxError: undefined,
        data: [],
      };

    case ACTION_TYPE.XSLX_SUCCESS:
      return {
        ...state,
        xslxPending: false,
        data: action.data,
      };

    case ACTION_TYPE.XSLX_ERROR:
      return {
        ...state,
        xslxPending: false,
        xslxError: action.error,
      };

    case ACTION_TYPE.XSLX_UPDATE:
      return {
        ...state,
        data: action.data,
      };

    case ACTION_TYPE.RESET_CHUNK:
      return {
        ...state,
        currentChunk: 0,
      };
    default:
      return state;
  }
}
