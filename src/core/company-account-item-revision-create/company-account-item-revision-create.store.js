import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE } from './company-account-item-revision-create.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
  company: [
    {
      name: '',
      inn: '',
      description: '',
      fileIdList: [],
      fileList: [],
      infoValid: false,
      year: [
        {
          year: '',
          period: [true, true, true, true],
          valid: false,
        },
      ],
    },
  ],
  error: false,
  total: 0,
};

export function companyAccountItemRevisionCreateStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE: {
      const newTotalQuarters = state.company.reduce((p, c) => {
        return (
          p +
          c.year.reduce((p, c) => {
            return (
              p +
              (c.year
                ? c.period.reduce((p, c) => {
                    return p + (c === true ? 1 : 0);
                  }, 0)
                : 0)
            );
          }, 0)
        );
      }, 0);

      return {
        ...state,
        total: newTotalQuarters * 500,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_COMPANY: {
      const newCompanyList = state.company;
      newCompanyList.push({
        name: '',
        inn: '',
        description: '',
        fileIdList: [],
        fileList: [],
        year: [
          {
            year: '',
            period: [true, true, true, true],
          },
        ],
      });
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_REMOVE_COMPANY: {
      const newCompanyList = state.company;
      newCompanyList.splice(action.companyId, 1);
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_YEAR: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].year.push({
        year: '',
        period: [true, true, true, true],
        valid: false,
      });
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].year[action.yearId].year =
        action.payload;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR_PERIOD: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].year[action.yearId].period =
        action.periods;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DELETE_YEAR: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].year.splice(action.yearId, 1);
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_NAME: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].name = action.payload;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_INN: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].inn = action.payload;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_DESCRIPTION: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].description = action.payload;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_FILE_LIST: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].fileIdList = action.fileIdList;
      newCompanyList[action.companyId].fileList = action.fileList;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_YEAR_VALIDE: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].year[action.yearId].valid =
        action.isValid;
      return {
        ...state,
        company: newCompanyList,
      };
    }

    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_INFO_VALIDE: {
      const newCompanyList = state.company;
      newCompanyList[action.companyId].infoValid = action.isValid;
      return {
        ...state,
        company: newCompanyList,
      };
    }
    case COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.CLEANUP: {
      return {
        form: initRequestState(),
        company: [
          {
            name: '',
            inn: '',
            description: '',
            fileIdList: [],
            fileList: [],
            infoValid: false,
            year: [
              {
                year: '',
                period: [true, true, true, true],
                valid: false,
              },
            ],
          },
        ],
        error: false,
        total: 0,
      };
    }

    default:
      return state;
  }
}
