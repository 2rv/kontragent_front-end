import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE } from './company-account-item-self-revision-create.constant';

export function companyAccountItemSelfRevisionCreateTotal() {}

export function companyAccountItemSelfRevisionCreateAddCompany() {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_COMPANY,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionCreateRemoveCompany(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_REMOVE_COMPANY,
      companyId: companyId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionCreateAddYear(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_YEAR,
      companyId: companyId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionCreateChangeYear(
  companyId,
  yearId,
  value,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR,
      companyId: companyId,
      yearId: yearId,
      payload: value,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionCreateChangeYearPeriod(
  companyId,
  yearId,
  periods,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR_PERIOD,
      companyId: companyId,
      yearId: yearId,
      periods: periods,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionCreateDeleteYear(
  companyId,
  yearId,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DELETE_YEAR,
      companyId: companyId,
      yearId: yearId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionChangeCompanyName(
  companyId,
  companyName,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_NAME,
      companyId: companyId,
      payload: companyName,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionChangeCompanyINN(companyId, inn) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_INN,
      companyId: companyId,
      payload: inn,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionChangeCompanyDescription(
  companyId,
  description,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_DESCRIPTION,
      companyId: companyId,
      payload: description,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemSelfRevisionChangeFileList(
  companyId,
  fileList,
) {
  const fileIdList = fileList.map((i) => i.id);
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_FILE_LIST,
      companyId: companyId,
      fileIdList: fileIdList,
      fileList: fileList,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function setYearValid(companyId, yearId, isValid) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_YEAR_VALIDE,
      companyId,
      yearId,
      isValid,
    });
  };
}

export function setRevisionInfoValid(companyId, isValid) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_INFO_VALIDE,
      companyId,
      isValid,
    });
  };
}

export function cleanupStore() {
  return {
    type: COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ACTION_TYPE.CLEANUP,
  };
}
