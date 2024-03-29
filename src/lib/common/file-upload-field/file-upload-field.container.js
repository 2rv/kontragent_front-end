import React from 'react';

import { useDispatch } from 'react-redux';

import { httpRequest } from '../../../main/http';

import { FileUploadFieldComponent } from './file-upload-field.component';

export function FileUploadFieldContainer(props) {
  const { storeOnFileChange, filedata } = props;
  const dispatch = useDispatch();
  const storeFileChange = (fileList) => {
    storeOnFileChange && dispatch(storeOnFileChange(fileList));
  };

  const updateFileListData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest.post('/file', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setRequestPending(false);
      setRequestSuccess(true);
      return res.data;
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const handleDelete = (e) => {
    const deleteItem = e.target.parentNode.parentNode.id;
    const result = getData.filter((item) => item.uuid !== deleteItem);
    setData(result);
    props.onFileDelete && props.onFileDelete(result);
  };

  const onFileAdd = async (e) => {
    let file = e.target.files[0];

    e.preventDefault();

    let formData = new FormData();
    formData.append('file', file);

    const resData = await updateFileListData(formData);

    resData.fileName = file.name;

    const data = [...getData, resData];

    setData(data);

    storeFileChange(data);

    props.onFileAdd && props.onFileAdd(data);
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getData, setData] = React.useState([]);

  return (
    <FileUploadFieldComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      onFileAdd={onFileAdd}
      data={getData}
      errorMessage={getRequestErrorMessage}
      handleDelete={handleDelete}
    />
  );
}
