import React, { useReducer } from 'react';
import readXlsxFile from 'read-excel-file';
import { httpRequest } from '../../main/http';
import { CompanyAdminImportComponent } from './company-admin-import.component';

const initialState = {
  pending: false,
  success: false,
  error: undefined,
  xslxPending: false,
  xslxError: undefined,
  data: [],
};

function companyAdminImportReducer(state, action) {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        pending: true,
        success: false,
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
        error: action.error,
      };

    case 'XSLX_PENDING':
      return {
        ...state,
        xslxPending: true,
        xslxError: undefined,
        data: [],
      };

    case 'XSLX_SUCCESS':
      return {
        ...state,
        xslxPending: false,
        data: action.data,
      };

    case 'XSLX_ERROR':
      return {
        ...state,
        xslxPending: false,
        xslxError: action.error,
      };

    case 'CHANGE':
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}

export function CompanyAdminImportContainer() {
  const [state, setState] = useReducer(companyAdminImportReducer, initialState);

  async function importCompaniesAction(data) {
    setState({ type: 'PENDING' });
    try {
      await httpRequest({
        method: 'POST',
        url: '/company/import',
        data: { companies: data },
      });
      setState({ type: 'SUCCESS' });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setState({ type: 'ERROR', error: error.response.data.message });
      }
    }
  }

  async function parseXslxAction(file) {
    setState({ type: 'XSLX_PENDING' });
    try {
      readXlsxFile(file, { schema }).then((data) => {
        console.log(data.errors);
        console.log(data);
        setState({ type: 'XSLX_SUCCESS', data: data.rows });
      });
    } catch (error) {
      setState({ type: 'XSLX_ERROR', error: error });
    }
  }

  const onChange = (e) => {
    const file = e.target.files[0];
    parseXslxAction(file);
  };

  function onChangeList(newItem) {
    const result = state.data.map((item, index) => {
      if (index === newItem.index) {
        return newItem;
      }
      return item;
    });
    setState({ type: 'CHANGE', data: result });
  }

  function onDelete(index) {
    const result = state.data.filter((item, i) => i !== index);
    setState({ type: 'CHANGE', data: result });
  }

  function onSave() {
    importCompaniesAction(state.data);
  }

  return (
    <CompanyAdminImportComponent
      state={state}
      onSave={onSave}
      onDelete={onDelete}
      onChange={onChange}
      onChangeList={onChangeList}
      dataFields={dataFields}
    />
  );
}

const schema = {
  ИНН: {
    prop: 'inn',
    type: String,
    required: true,
  },
  Название: {
    prop: 'name',
    type: String,
    required: true,
  },
  review: {
    prop: 'review',
    type: String,
  },
  createDate: {
    prop: 'createDate',
    type: Date,
  },
};

const dataFields = ['inn', 'name', 'review'];
