import readXlsxFile from 'read-excel-file';
import { httpRequest } from '../../main/http';

import {
  COMPANY_ADMIN_IMPORT_ACTION_TYPE as ACTION_TYPE,
  CONVERT_SCHEMA,
} from './company-admin-import.constant';

export function uploadCompanyAdminImportAction(data, type, currentChunk = 0) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });
    try {
      const SIZE = 50;
      const CHUNK_LENGTH = Math.ceil(data.length / SIZE);

      for (
        let chunkIndex = currentChunk;
        chunkIndex < CHUNK_LENGTH;
        chunkIndex++
      ) {
        await httpRequest({
          method: 'POST',
          url: '/company/admin/import',
          data: {
            companies: data.slice(chunkIndex * SIZE, chunkIndex * SIZE + SIZE),
            type: type,
          },
        });

        dispatch({
          type: ACTION_TYPE.FORM_PROGRESS,
          data: CHUNK_LENGTH * (chunkIndex / 100),
          currentChunk: chunkIndex,
        });
      }
      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.FORM_ERROR,
          error: error.response.data.message,
        });
      }
    }
  };
}

export function parseCompanyAdminImportXslxAction(file) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.XSLX_PENDING,
    });
    try {
      const data = await readXlsxFile(file, { schema: CONVERT_SCHEMA });
      console.log(data.rows);
      dispatch({
        type: ACTION_TYPE.XSLX_SUCCESS,
        data: data.rows,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.XSLX_ERROR,
          error: error.response.data.message,
        });
      }
    }
  };
}

export function deleteCompanyAdminImportXslxAction(index) {
  return async (dispatch, data) => {
    try {
      const result = data.filter((_, i) => i !== index);

      dispatch({
        type: ACTION_TYPE.XSLX_UPDATE,
        data: result,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
}

export function updateCompanyAdminImportXslxAction(currentItem) {
  return async (dispatch, data) => {
    try {
      const result = data.map((item, index) => {
        if (index === currentItem.index) {
          return currentItem;
        }
        return item;
      });

      dispatch({
        type: ACTION_TYPE.XSLX_UPDATE,
        data: result,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
}
