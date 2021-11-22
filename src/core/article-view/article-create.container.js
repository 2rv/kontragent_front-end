import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  createArticleUploadData,
  updateArticle,
  ArticleLoadData,
  articleDelete,
} from './article-create.action';
import { CreateArticleComponent } from './article-create.component';
import { CREATE_ARTICLE_STORE_NAME } from './article-create.constant';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { formValidation } from './article-create.validation';
import { getQuery } from '../../main/navigation';
import { useEffect } from 'react';

export function CreateArticleContainer() {
  const dispatch = useDispatch();
  const articleId = getQuery('id');
  const postId = getQuery('postId');

  const {
    state,
    pageLoading,
    productState,
    updateArticleState,
    deleteArticleState,
  } = useSelector((state) => ({
    state: state[CREATE_ARTICLE_STORE_NAME].createArticle,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    productState: state[CREATE_ARTICLE_STORE_NAME].product,
    updateArticleState: state[CREATE_ARTICLE_STORE_NAME].updateArticle,
    deleteArticleState: state[CREATE_ARTICLE_STORE_NAME].deleteArticle,
  }));

  useEffect(() => {
    if (Boolean(articleId)) {
      dispatch(ArticleLoadData(articleId));
    }
    if (Boolean(postId)) {
      dispatch(ArticleLoadData(postId));
    }
  }, []);

  const onSubmit = (formValues) => {
    if (Boolean(articleId)) {
      dispatch(updateArticle(articleId, formValues));
    } else {
      dispatch(createArticleUploadData(formValues));
    }
  };

  const deleteProduct = () => {
    dispatch(articleDelete(articleId));
  };
  const initialValues = () => {
    const data = getRequestData(productState, {
      [ARTICLE_FIELD_NAME.TITLE]: '',
      [ARTICLE_FIELD_NAME.DESCRIPTION]: '',
      [ARTICLE_FIELD_NAME.ARTICLE]: {},
    });
    return data;
  };


  return (
    <CreateArticleComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      initialValues={initialValues()}
      isUploadedSuccess={isRequestSuccess(productState)}
      onSubmit={onSubmit}
      validation={formValidation}
      updateIsPending={isRequestPending(updateArticleState)}
      updateIsError={isRequestError(updateArticleState)}
      updateIsSuccess={isRequestSuccess(updateArticleState)}
      updateErrorMessage={getRequestErrorMessage(updateArticleState)}
      deleteProduct={deleteProduct}
      deleteIsPending={isRequestPending(deleteArticleState)}
      deleteIsError={isRequestError(deleteArticleState)}
      deleteErrorMessage={getRequestErrorMessage(deleteArticleState)}
      readOnly={!!postId}
      edit={!!articleId}
    />
  );
}
