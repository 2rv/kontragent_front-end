import { INVITE_DATA_NAME } from './invite.constant';

export const convertInviteFormData = (data) => ({
  [INVITE_DATA_NAME.EMAIL]: data[INVITE_DATA_NAME.EMAIL],
});
