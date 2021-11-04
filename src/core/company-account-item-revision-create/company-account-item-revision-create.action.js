import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE } from './company-account-item-revision-create.constant';

export function companyAccountItemRevisionCreateAddCompany() {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_COMPANY,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionCreateRemoveCompany(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_REMOVE_COMPANY,
      companyId: companyId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionCreateAddYear(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ADD_YEAR,
      companyId: companyId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionCreateChangeYear(
  companyId,
  yearId,
  value,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR,
      companyId: companyId,
      yearId: yearId,
      payload: value,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionCreateChangeYearPeriod(
  companyId,
  yearId,
  periods,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_YEAR_PERIOD,
      companyId: companyId,
      yearId: yearId,
      periods: periods,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
  };
}

export function companyAccountItemRevisionCreateDeleteYear(companyId, yearId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DELETE_YEAR,
      companyId: companyId,
      yearId: yearId,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionChangeCompanyName(
  companyId,
  companyName,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_NAME,
      companyId: companyId,
      payload: companyName,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionChangeCompanyINN(companyId, inn) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_COMPANY_INN,
      companyId: companyId,
      payload: inn,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionChangeCompanyDescription(
  companyId,
  description,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_DESCRIPTION,
      companyId: companyId,
      payload: description,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function companyAccountItemRevisionChangeFileList(companyId, fileList) {
  const fileIdList = fileList.map((i) => i.id);
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_CHANGE_FILE_LIST,
      companyId: companyId,
      fileIdList: fileIdList,
      fileList: fileList,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_GET_PRICE,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function setYearValid(companyId, yearId, isValid) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_YEAR_VALIDE,
      companyId,
      yearId,
      isValid,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}

export function setRevisionInfoValid(companyId, isValid) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_INFO_VALIDE,
      companyId,
      isValid,
    });
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ACTION_TYPE.COMPANY_ACCOUNT_ITEM_REVISION_CREATE_SET_REVISON_VALIDE,
    });
  };
}
