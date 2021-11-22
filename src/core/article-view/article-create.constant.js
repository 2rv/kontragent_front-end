export const CREATE_ARTICLE_ROUTE_PATH = '/article/create';

export const CREATE_ARTICLE_DYNAMIC_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/article/create/${id}`;

export const CREATE_ARTICLE_STORE_NAME = 'CREATE_ARTICLE';
export const CREATE_ARTICLE_API = {
  CREATE_ARTICLE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: 'post/create',
  },
  CREATE_ARTICLE_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create',
  },
  ARTICLE_LOAD: {
    ENDPOINT: (id) => `post/get/${id}`,
    TYPE: 'GET',
  },
  ARTICLE_CHANGE: {
    ENDPOINT: (id) => `post/update/${id}`,
    TYPE: 'PUT',
  },
  ARTICLE_DELETE: {
    ENDPOINT: (id) => `/post/delete/${id}`,
    TYPE: 'DELETE',
  },
};
