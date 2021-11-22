import { useEffect } from 'react';
import {
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';

import { getQuery } from '../../main/navigation';
import { articleLoadData } from './article-view.action';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ARTICLE_STORE_NAME } from './article-view.constant';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';

import { ArticleViewComponent } from './article-view.component';

export function ArticleViewContainer() {
  const dispatch = useDispatch();
  const articleId = getQuery('articleId');

  const { pageLoading, articleState, role } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    articleState: state[ARTICLE_STORE_NAME].article,
    role: state[AUTH_STORE_NAME].user.role,
  }));
  const isadmin = role === USER_ROLE.ADMIN

  useEffect(() => {
    dispatch(articleLoadData(articleId));
  }, []);
  
  return (
    <ArticleViewComponent
      pageLoading={pageLoading}
      article={getRequestData(articleState)}
      articleId={articleId}
      isadmin={isadmin}
      loadDataPending={isRequestPending(articleState)}
      loadDataSuccess={isRequestSuccess(articleState)}
    />
  );
}
