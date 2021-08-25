import { AUTH_USER_DATA, AuthUserDto } from './auth.type';

export const parseUserAuthData = (raw: any): AuthUserDto => ({
  id: raw[AUTH_USER_DATA.ID],
  email: raw[AUTH_USER_DATA.EMAIL],
  phone: raw[AUTH_USER_DATA.PHONE],
});
