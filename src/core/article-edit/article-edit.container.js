import { useEffect } from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';

import { getQuery } from '../../main/navigation';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { EDIT_ARTICLE_STORE_NAME } from './article-edit.constant';
import {
  updateArticle,
  articleLoadData,
  articleDelete,
  resetArticleEditDataFormState
} from './article-edit.action';

import { EditArticleComponent } from './article-edit.component';
import { EDIT_ARTICLE_FIELD_NAME } from './article-edit.type';
import { formValidation } from './article-edit.validation';
import { convertForEdit } from './article-edit.convert';

export function EditArticleContainer() {
  const dispatch = useDispatch();
  const articleId = getQuery('articleId');

  const { pageLoading, articleState, updateArticleState, deleteArticleState } =
    useSelector((state) => ({
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      articleState: state[EDIT_ARTICLE_STORE_NAME].article,
      updateArticleState: state[EDIT_ARTICLE_STORE_NAME].updateArticle,
      deleteArticleState: state[EDIT_ARTICLE_STORE_NAME].deleteArticle,
    }));

  useEffect(() => {
    dispatch(articleLoadData(articleId));
  }, []);

  useEffect(() => {
    dispatch(resetArticleEditDataFormState());
  }, []);

  const onSubmit = (formValues) => {
    const data = convertForEdit(formValues);
    dispatch(updateArticle(articleId, data));
  };

  const deleteProduct = () => {
    dispatch(articleDelete(articleId));
  };

  const initialValues = () => {
    const data = getRequestData(articleState, {
      [EDIT_ARTICLE_FIELD_NAME.TITLE]: '',
      [EDIT_ARTICLE_FIELD_NAME.DESCRIPTION]: '',
      [EDIT_ARTICLE_FIELD_NAME.ARTICLE]: {},
    });
    return data;
  };

  return (
    <EditArticleComponent
      initialValues={initialValues()}
      validation={formValidation}
      pageLoading={pageLoading}
      onSubmit={onSubmit}
      loadDataPending={isRequestPending(articleState)}
      loadDataSuccess={isRequestSuccess(articleState)}
      updateIsPending={isRequestPending(updateArticleState)}
      updateIsError={isRequestError(updateArticleState)}
      updateIsSuccess={isRequestSuccess(updateArticleState)}
      updateErrorMessage={getRequestErrorMessage(updateArticleState)}
      deleteProduct={deleteProduct}
      deleteIsPending={isRequestPending(deleteArticleState)}
      deleteIsSuccess={isRequestSuccess(deleteArticleState)}
      deleteIsError={isRequestError(deleteArticleState)}
      deleteErrorMessage={getRequestErrorMessage(deleteArticleState)}
    />
  );
}
