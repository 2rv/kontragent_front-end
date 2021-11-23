export const ARTICLE_ROUTE_PATH = '/article/[articleId]';

export const ARTICLE_DYNAMIC_ROUTE_PATH = (
  { articleId } = { articleId: '[articleId]' },
) => `/article/${articleId}`;

export const ARTICLE_STORE_NAME = 'ARTICLE';

export const ARTICLE_API = {
  ARTICLE_LOAD: {
    ENDPOINT: (postId) => `post/get/${postId}`,
    TYPE: 'GET',
  },
};

export const ARTICLE_DATA_NAME = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  ARTICLE: 'article',
  CREATE_DATE: 'createDate',
  CREATOR: 'creator',
  FIRSTNAME: 'firstname',
  LASTNAME: 'lastname',
  ID: 'id',
};