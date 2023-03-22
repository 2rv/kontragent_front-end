import { useReducer, useContext } from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';

import {
  initialState,
  companyAccountItemKontragentImportXlsxReducer,
} from './company-account-item-kontragent-import-xlsx.reducer';
import {
  uploadCompanyAccountItemKontragentImportXlsxCreateForm,
  importCompanyAccountItemKontragentImportXlsx,
  updateListCompanyAccountItemKontragentImportXlsx,
  deleteListCompanyAccountItemKontragentImportXlsx,
} from './company-account-item-kontragent-import-xlsx.action';
import { CompanyAccountItemKontragentImportXlsxComponent } from './company-account-item-kontragent-import-xlsx.component';
import { CompanyAccountItemKontragentContext } from '../company-account-item-kontragent/company-account-item-kontragent.page';

export function CompanyAccountItemKontragentImportXlsxContainer() {
  const [state, setState] = useReducer(
    companyAccountItemKontragentImportXlsxReducer,
    initialState,
  );
  const { value } = useContext(CompanyAccountItemKontragentContext);
  const { list } = getRequestData(state.xlsx);

  const onChange = (e) => {
    const file = e.target.files[0];
    importCompanyAccountItemKontragentImportXlsx(file)(setState);
  };

  function onChangeList(newItem) {
    updateListCompanyAccountItemKontragentImportXlsx(list, newItem)(setState);
  }

  function onDelete(index) {
    deleteListCompanyAccountItemKontragentImportXlsx(list, index)(setState);
  }

  function onSave() {
    const companyId = getQuery('companyId');
    uploadCompanyAccountItemKontragentImportXlsxCreateForm(companyId, list)(
      setState,
      value.reloadList,
    );
  }

  return (
    <CompanyAccountItemKontragentImportXlsxComponent
      xslxIsPending={isRequestPending(state.xlsx)}
      xslxIsSuccess={isRequestSuccess(state.xlsx)}
      xslxtIsError={isRequestError(state.xlsx)}
      xslxtErrorMessage={getRequestErrorMessage(state.xlsx)}
      list={list}
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      onImport={onChange}
      onDelete={onDelete}
      onUpdate={onChangeList}
      onSave={onSave}
    />
  );
}
