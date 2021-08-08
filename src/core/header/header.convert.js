import {
  HEADER_NOTIFICATION_DATA_KEY,
  HEADER_NOTIFICATION_DATA_NAME,
} from './header.type';

const getUserRole = (roleId) => {
  switch (roleId) {
    case '1':
      return 'Основатель';
    case '2':
      return 'Менеджер';
    default:
      return 'Менеджер';
  }
};

export const performConvertNotificationData = (rawdata) => {
  return rawdata.map((e) => {
    return {
      [HEADER_NOTIFICATION_DATA_NAME.PROP]:
        e[HEADER_NOTIFICATION_DATA_KEY.PROP],

      [HEADER_NOTIFICATION_DATA_NAME.PROP]: {
        [HEADER_NOTIFICATION_DATA_NAME.PROP]: getUserRole(
          e[HEADER_NOTIFICATION_DATA_KEY.PROP],
        ),
        [HEADER_NOTIFICATION_DATA_NAME.PROP]:
          e[HEADER_NOTIFICATION_DATA_KEY.PROP],
      },
    };
  });
};
