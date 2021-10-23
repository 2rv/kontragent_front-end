import { USER_REFERAL_CREATE_DATA_NAME } from './user-referal-create.constant';

export const convertUserReferalCreateFormData = (data) => ({
  [USER_REFERAL_CREATE_DATA_NAME.EMAIL]:
    data[USER_REFERAL_CREATE_DATA_NAME.EMAIL],
});
