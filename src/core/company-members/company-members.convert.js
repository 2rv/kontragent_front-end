import {
  COMPANY_MEMBERS_DATA_KEY,
  COMPANY_MEMBERS_DATA_NAME,
  COMPANY_INFO_DATA_NAME,
  COMPANY_INFO_DATA_KEY,
} from './company-members.type';

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

export const performCompanyMembers = (rawdata) => {
  return rawdata.map((e) => {
    return {
      [COMPANY_MEMBERS_DATA_NAME.COMPANY_USER_ID]:
        e[COMPANY_MEMBERS_DATA_KEY.COMPANY_USER_ID],

      [COMPANY_MEMBERS_DATA_NAME.USER_AVATAR]:
        e[COMPANY_MEMBERS_DATA_KEY.USER_AVATAR],

      [COMPANY_MEMBERS_DATA_NAME.USER_NAME]:
        e[COMPANY_MEMBERS_DATA_KEY.USER_NAME],

      [COMPANY_MEMBERS_DATA_NAME.USER_ROLE_INFO]: {
        [COMPANY_MEMBERS_DATA_NAME.USER_ROLE_NAME]: getUserRole(
          e[COMPANY_MEMBERS_DATA_KEY.USER_ROLE],
        ),
        [COMPANY_MEMBERS_DATA_NAME.USER_ROLE_ID]:
          e[COMPANY_MEMBERS_DATA_KEY.USER_ROLE],
      },
      [COMPANY_MEMBERS_DATA_NAME.IN_COMPANY_DATE]:
        e[COMPANY_MEMBERS_DATA_KEY.IN_COMPANY_DATE],
    };
  });
};

export const performCompanyInfo = (rawdata) => {
  return {
    [COMPANY_INFO_DATA_NAME.COMPANY_NAME]:
      rawdata[COMPANY_INFO_DATA_KEY.COMPANY_NAME],
  };
};
