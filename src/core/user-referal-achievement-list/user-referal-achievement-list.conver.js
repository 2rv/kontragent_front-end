import { USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME } from './user-referal-achievement-list.constant';
import { convertReferalAchievementStatus } from '../../lib/common/convert/convert.core';

export const performUserReferalAchievementListRowData = (row) => {
  return row.map((referalAchievement) => ({
    [USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.AWARD]:
      referalAchievement[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.AWARD],
    [USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.FIRSTNAME]:
      referalAchievement[
        USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.REFERAL_MEMBER
      ][USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.USER][
        USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.FIRSTNAME
      ],
    [USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.LASTNAME]:
      referalAchievement[
        USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.REFERAL_MEMBER
      ][USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.USER][
        USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.LASTNAME
      ],
    [USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.TYPE]:
      convertReferalAchievementStatus(
        referalAchievement[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.TYPE],
      ),
  }));
};
