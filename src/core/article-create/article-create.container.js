import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { CREATE_ARTICLE_STORE_NAME } from './article-create.constant';
import { ARTICLE_FIELD_NAME } from './article-create.type';

import { CreateArticleComponent } from './article-create.component';
import {
  createArticleUploadData,
  resetArticleCreateDataFormState,
} from './article-create.action';
import { convertForCreateUpdate } from './article-create.convert';
import { formValidation } from './article-create.validation';

export function CreateArticleContainer() {
  const dispatch = useDispatch();

  const { pageLoading, createArticleStore } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    createArticleStore: state[CREATE_ARTICLE_STORE_NAME].createArticle,
  }));

  const onSubmit = (formValues) => {
    const data = convertForCreateUpdate(formValues);
    dispatch(createArticleUploadData(data));
  };

  const initialValues = () => ({
    [ARTICLE_FIELD_NAME.TITLE]: '',
    [ARTICLE_FIELD_NAME.DESCRIPTION]: '',
    [ARTICLE_FIELD_NAME.ARTICLE]: {},
  });

  useEffect(() => {
    return function cleanup() {
      dispatch(resetArticleCreateDataFormState());
    };
  }, []);

  return (
    <CreateArticleComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(createArticleStore)}
      isError={isRequestError(createArticleStore)}
      isSuccess={isRequestSuccess(createArticleStore)}
      errorMessage={getRequestErrorMessage(createArticleStore)}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
