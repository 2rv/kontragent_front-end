import { CompanyMembersComponent } from './company-members.component';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { COMPANY_MEMBERS_STORE_NAME } from './company-members.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { companyMembersListLoad } from './company-members.action';

export function CompanyMembersContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COMPANY_MEMBERS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(companyMembersListLoad());
  //   }, []);

  return (
    <CompanyMembersComponent
      isPending={isRequestPending(state.companyMembersListData)}
      isError={isRequestError(state.companyMembersListData)}
      isSuccess={isRequestSuccess(state.companyMembersListData)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.companyMembersListData)}
      companyMembersListData={companyMembersListData}
    />
  );
}
const companyMembersListData = [
  {
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
];
