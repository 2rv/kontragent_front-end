import { useReducer, useState } from 'react';
import {
  deleteCompanyAdminImportXslxAction,
  parseCompanyAdminImportXslxAction,
  updateCompanyAdminImportXslxAction,
  uploadCompanyAdminImportAction,
} from './company-admin-import.action';
import { CompanyAdminImportComponent } from './company-admin-import.component';
import {
  initialState,
  companyAdminImportReducer,
} from './company-admin-import.reducer';

export function CompanyAdminImportContainer() {
  const [state, setState] = useReducer(companyAdminImportReducer, initialState);

  const onChange = (e) => {
    const file = e.target.files[0];
    parseCompanyAdminImportXslxAction(file)(setState);
  };

  function onChangeList(newItem) {
    updateCompanyAdminImportXslxAction(newItem)(setState, state.data);
  }

  function onDelete(index) {
    deleteCompanyAdminImportXslxAction(index)(setState, state.data);
  }

  function onSave() {
    uploadCompanyAdminImportAction(
      state.data,
      type,
      state.currentChunk,
    )(setState);
  }

  const [type, setType] = useState(undefined);

  const onChangeType = (e) => {
    const value = e.target.value;
    if (value) {
      setType(value);
    }
  };

  return (
    <CompanyAdminImportComponent
      state={state}
      onSave={onSave}
      onDelete={onDelete}
      onChange={onChange}
      onChangeList={onChangeList}
      onChangeType={onChangeType}
      type={type}
    />
  );
}
