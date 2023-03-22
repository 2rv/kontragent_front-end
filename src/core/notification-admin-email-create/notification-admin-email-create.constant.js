export const NOTIFICATION_EMAIL_CREATE_ROUTE_PATH = '/admin/notification';

export const NOTIFICATION_EMAIL_CREATE_DATA_NAME = {
  EMAIL: 'email',
  MESSAGE: 'message',
  FILE_LIST: 'fileList',
};

export const NOTIFICATION_EMAIL_CREATE_API = {
  NOTIFICATION_EMAIL_CREATE: {
    ENDPOINT: '/notification/',
    TYPE: 'POST',
  },
  NOTIFICATION_EVERYONE_CREATE: {
    ENDPOINT: '/notification/everyone',
    TYPE: 'POST',
  },
};
