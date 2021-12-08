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

  useEffect(() => {
    dispatch(articleLoadData(articleId));
  }, []);

  const { pageLoading, articleState, role, userId, creatorId } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    articleState: state[ARTICLE_STORE_NAME].article,
    role: state[AUTH_STORE_NAME].user.role,
    userId: state[AUTH_STORE_NAME].user.id,
    creatorId: state[ARTICLE_STORE_NAME].article.data?.id
  }));

  const isadmin = role === USER_ROLE.ADMIN
  const iscreator = creatorId === userId

  return (
    <ArticleViewComponent
      pageLoading={pageLoading}
      article={getRequestData(articleState)}
      isadmin={isadmin}
      articleId={articleId}
      iscreator={iscreator}
      loadDataPending={isRequestPending(articleState)}
      loadDataSuccess={isRequestSuccess(articleState)}
    />
  );
}
