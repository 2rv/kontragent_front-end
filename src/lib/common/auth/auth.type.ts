export enum AUTH_USER_DATA {
  ID = 'id',
  ROLE = 'role',
  EMAIL = 'email',
  PHONE = 'phone',
  CONFIRM_EMAIL = 'confirmEmail',
  CONFIRM_PHONE = 'confirmPhone',
  FIRST_NAME = 'firstname',
  LAST_NAME = 'lastname',
  COMPANY_ID_ARRAY = 'companyIdArray',
}

export interface AuthUserDto {
  id: number;
  role: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  confirmPhone: boolean;
  confirmEmail: boolean;
  companyIdArray: number[];
}

export interface AuthStoreState {
  token: string | null;
  logged: boolean | null;
  user: AuthUserDto | null;
}

export interface AuthStoreAction extends AuthStoreState {
  type: AUTH_ACTION_TYPE;
}

export enum AUTH_ACTION_TYPE {
  SET_DATA = 'AUTH.SET_DATA',
}
