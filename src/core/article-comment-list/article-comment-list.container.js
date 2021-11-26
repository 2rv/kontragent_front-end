import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ArticleCommentListComponent } from './article-comment-list.component';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { performArticleCommentListData } from './article-comment-list.convert';
import { ARTICLE_COMMENT_SEND_STORE_NAME } from '../article-comment-send/article-comment-send.constant';
import { ARTICLE_COMMENT_DELETE_STORE_NAME } from '../article-comment-delete/article-comment-delete.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';

export function ArticleCommentListContainer() {
  const { pageLoading, state, stateDelete, role } = useSelector((state) => ({
    state: state[ARTICLE_COMMENT_SEND_STORE_NAME],
    stateDelete: state[ARTICLE_COMMENT_DELETE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    role: state[AUTH_STORE_NAME].user.role,
  }));

  React.useEffect(() => {
    getArticleCommentList();
  }, []);

  React.useEffect(() => {
    updateArticleCommentList();
  }, [stateDelete.form.success, state.form.success]);

  const getArticleCommentList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/comment/get/post/${getQuery('articleId')}`,
      });

      const data = performArticleCommentListData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const updateArticleCommentList = async () => {
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/comment/get/post/${getQuery('articleId')}`,
      });

      const data = performArticleCommentListData(res.data);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <ArticleCommentListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
      role={role}
    />
  );
}
