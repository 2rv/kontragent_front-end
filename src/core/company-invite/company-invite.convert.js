import {
  COMPANY_INVITE_DATA_KEY,
  COMPANY_INVITE_DATA_NAME,
} from './company-invite.type';

const getUserRole = (roleId) => {
  switch (roleId) {
    case 1:
      return 'Основатель';
    case 2:
      return 'Менеджер';
    default:
      return 'Менеджер';
  }
};

export const performCompanyInviteDataList = (rawdata) => {
  return rawdata.map((e) => {
    return {
      [COMPANY_INVITE_DATA_NAME.COMPANY_ID]:
        e[COMPANY_INVITE_DATA_KEY.COMPANY_ID],

      [COMPANY_INVITE_DATA_NAME.COMPANY_NAME]:
        e[COMPANY_INVITE_DATA_KEY.COMPANY_NAME],

      [COMPANY_INVITE_DATA_NAME.USER_ROLE]: getUserRole(
        e[COMPANY_INVITE_DATA_KEY.COMPANY_USER][0][
          COMPANY_INVITE_DATA_KEY.USER_ROLE
        ],
      ),

      [COMPANY_INVITE_DATA_NAME.CREATE_DATE]:
        e[COMPANY_INVITE_DATA_KEY.COMPANY_USER][0][
          COMPANY_INVITE_DATA_KEY.CREATE_DATE
        ],
    };
  });
};
