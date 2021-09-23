import { AUTH_USER_DATA, AuthUserDto } from './auth.type';

export const parseUserAuthData = (raw: any): AuthUserDto => ({
  id: raw[AUTH_USER_DATA.ID],
  role: raw[AUTH_USER_DATA.ROLE],
  email: raw[AUTH_USER_DATA.EMAIL],
  phone: raw[AUTH_USER_DATA.PHONE],
  confirmEmail: raw[AUTH_USER_DATA.CONFIRM_EMAIL],
  confirmPhone: raw[AUTH_USER_DATA.CONFIRM_PHONE],
  firstname: raw[AUTH_USER_DATA.FIRST_NAME],
  lastname: raw[AUTH_USER_DATA.LAST_NAME],
});
