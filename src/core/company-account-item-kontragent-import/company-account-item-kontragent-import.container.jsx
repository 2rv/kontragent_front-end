import { useReducer } from 'react';
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
  companyAccountItemKontragentImportReducer,
} from './company-account-item-kontragent-import.reducer';
import {
  importCompanyAccountItemKontragentImport,
  uploadCompanyAccountItemKontragentImportCreateForm,
  updateListCompanyAccountItemKontragentImport,
} from './company-account-item-kontragent-import.action';
import { CompanyAccountItemKontragentImportComponent } from './company-account-item-kontragent-import.component';

export function CompanyAccountItemKontragentImportContainer() {
  const [state, setState] = useReducer(
    companyAccountItemKontragentImportReducer,
    initialState,
  );

  const { list } = getRequestData(state.importForm);

  const onChange = (e) => {
    const file = e.target.files[0];
    importCompanyAccountItemKontragentImport(file)(setState);
  };

  function onChangeList(newItem) {
    const result = list.map((item, index) => {
      if (index === newItem.index) {
        return newItem;
      }
      return item;
    });
    updateListCompanyAccountItemKontragentImport(result)(setState);
  }

  function onDelete(index) {
    const result = list.filter((_, i) => i !== index);
    updateListCompanyAccountItemKontragentImport(result)(setState);
  }

  function saveKontragents() {
    const companyId = getQuery('companyId');
    uploadCompanyAccountItemKontragentImportCreateForm(
      companyId,
      list,
    )(setState);
  }

  return (
    <CompanyAccountItemKontragentImportComponent
      importIsPending={isRequestPending(state.importForm)}
      importIsSuccess={isRequestSuccess(state.importForm)}
      importIsError={isRequestError(state.importForm)}
      importErrorMessage={getRequestErrorMessage(state.importForm)}
      data={list}
      IsPending={isRequestPending(state.form)}
      IsSuccess={isRequestSuccess(state.form)}
      IsError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      onSave={saveKontragents}
      onDelete={onDelete}
      onChange={onChange}
      onChangeList={onChangeList}
    />
  );
}
