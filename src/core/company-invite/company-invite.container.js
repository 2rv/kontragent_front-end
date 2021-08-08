import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { companyInviteLoadDataAction } from './company-invite.action';
import { COMPANY_INVITE_STORE_NAME } from './company-invite.constant';
import { CompanyInviteComponent } from './company-invite.component';

export function CompanyInviteContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COMPANY_INVITE_STORE_NAME].companyInvite,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(companyInviteLoadDataAction());
  }, []);

  return (
    <CompanyInviteComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      companyInviteSelectOption={companyInviteSelectOption}
      companyInviteListData={companyInviteListData || state?.data}
    />
  );
}
const companyInviteSelectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const companyInviteListData = [
  {
    id: 1,
    avatar: 'https://bipbap.ru/wp-content/uploads/2017/07/30995.jpg',
    companyType: 'ООО',
    companyName: `"КАПСТРОЙЭНЕРГОТЕХ"`,
    role: 'Менеджер',
    userInvited: { name: 'Паша Новиков', role: 'Менеджер' },
    date: '06.08.2020',
  },
  {
    id: 2,
    avatar: 'https://bipbap.ru/wp-content/uploads/2017/07/30995.jpg',
    companyType: 'ООО',
    companyName: `"КАПСТРОЙЭНЕРГОТЕХ"`,
    role: 'Менеджер',
    userInvited: { name: 'Паша Новиков', role: 'Менеджер' },
    date: '06.08.2020',
    isAccepted: true,
  },
  {
    id: 3,
    avatar: 'https://bipbap.ru/wp-content/uploads/2017/07/30995.jpg',
    companyType: 'ООО',
    companyName: `"КАПСТРОЙЭНЕРГОТЕХ"`,
    userInvited: { name: 'Паша Новиков', role: 'Менеджер' },
    date: '06.08.2020',
    isCanceled: true,
  },
];
