export const EDIT_ARTICLE_ROUTE_PATH = '/article/edit/[articleId]';

export const EDIT_ARTICLE_DYNAMIC_ROUTE_PATH = (
  { articleId } = { articleId: '[articleId]' },
) => `/article/create/${articleId}`;

export const EDIT_ARTICLE_STORE_NAME = 'EDIT_ARTICLE';

export const EDIT_ARTICLE_API = {
  ARTICLE_LOAD: {
    ENDPOINT: (postId) => `post/get/${postId}`,
    TYPE: 'GET',
  },
  ARTICLE_CHANGE: {
    ENDPOINT: (postId) => `post/update/${postId}`,
    TYPE: 'PUT',
  },
  ARTICLE_DELETE: {
    ENDPOINT: (postId) => `/post/delete/${postId}`,
    TYPE: 'DELETE',
  },
};
