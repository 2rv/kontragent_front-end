import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ArticleCommentListComponent } from './article-comment-list.component';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { performArticleCommentListData } from './article-comment-list.convert';
import { ARTICLE_COMMENT_SEND_STORE_NAME } from '../article-comment-send/article-comment-send.constant';

export function ArticleCommentListContainer() {
  const { pageLoading, state } = useSelector((state) => ({
    state: state[ARTICLE_COMMENT_SEND_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getArticleCommentList();
  }, [state.form.success]);

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

      console.log(data);

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
    />
  );
}
