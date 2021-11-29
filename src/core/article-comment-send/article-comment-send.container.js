import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleCommentSendComponent } from './article-comment-send.component';
import { articleCommentSendValidation } from './article-comment-send.validation';
import {
  ARTICLE_COMMENT_SEND_STORE_NAME,
  ARTICLE_COMMENT_SEND_DATA_NAME,
} from './article-comment-send.constant';
import {
  changeArticleCommentSend,
  cleanupStore,
} from './article-comment-send.action';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

export function ArticleCommentSendContainer() {
  const dispatch = useDispatch();

  const { pageLoading, state } = useSelector((state) => ({
    state: state[ARTICLE_COMMENT_SEND_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const articleCommentSendData = async (data) => {
    dispatch(changeArticleCommentSend(data));
  };

  const getInitialValue = () => {
    return {
      [ARTICLE_COMMENT_SEND_DATA_NAME.TEXT]: '',
    };
  };

  React.useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <ArticleCommentSendComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={articleCommentSendValidation}
      onSubmitForm={articleCommentSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
