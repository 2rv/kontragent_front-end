import { CompanyMembersComponent } from './company-members.component';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  COMPANY_MEMBERS_STORE_NAME,
  DYNAMIC_QUERY,
} from './company-members.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import {
  companyMembersListLoad,
  getCompanyInfo,
  removeUserOutCompany,
  userAddInCompany,
} from './company-members.action';
import { getQuery } from '../../main/navigation';
import { COMPANY_MEMBERS_FORM_FIELD_NAME } from './company-members.type';

export function CompanyMembersContainer() {
  const dispatch = useDispatch();
  const QueryCompanyId = getQuery(DYNAMIC_QUERY);
  const [modalState, setModal] = useState(modalInitialState);
  const [popoverState, setPopover] = useState(popoverInitialState);
  useEffect(() => {
    if (QueryCompanyId) {
      dispatch(getCompanyInfo(QueryCompanyId));
      dispatch(companyMembersListLoad(QueryCompanyId));
    }
  }, []);
  const { state, companyInfo, pageLoading } = useSelector((state) => ({
    state: state[COMPANY_MEMBERS_STORE_NAME].companyMembersListData,
    companyInfo: state[COMPANY_MEMBERS_STORE_NAME].companyInfoData,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const initialValueFormModalForm = () => {
    return {
      [COMPANY_MEMBERS_FORM_FIELD_NAME.USER_ROLE_ID]:
        modalState.selectedUser?.roleInfo?.roleId || 0,
    };
  };

  const sendNewUserRoleInCompany = (value) => {
    console.log(value);
    closeModal();
  };

  const userAddCompany = () => {
    dispatch(userAddInCompany(QueryCompanyId));
  };
  const userRemove = () => {
    dispatch(
      removeUserOutCompany(QueryCompanyId, popoverState.selectedUser.id),
    );
    closePopover();
  };
  const userChangeRole = () => {
    openModal(popoverState.selectedUser);
    closePopover();
  };
  const userComplain = () => {
    console.log('click userComplain');
    closePopover();
  };

  const openModal = (selectedUser) => {
    setModal({ isModalOpen: true, selectedUser });
  };
  const closeModal = () => {
    setModal(modalInitialState);
  };
  const openPopover = (event, selectedUser) => {
    setPopover({ isPopoverOpen: event.currentTarget, selectedUser });
  };
  const closePopover = () => {
    setPopover(popoverInitialState);
  };

  const initialValueForInviteUserForm = () => {
    return {
      [COMPANY_MEMBERS_FORM_FIELD_NAME.INVITE_USER_EMAIL]: '',
    };
  };

  const sendInviteOnCompanyToUser = (value) => {
    console.log(value);
  };

  return (
    <CompanyMembersComponent
      isPending={isRequestPending(state)}
      pageLoading={pageLoading}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      companyInfo={companyInfo.data}
      companyMembersListData={state.data}
      userRemove={userRemove}
      userChangeRole={userChangeRole}
      userComplain={userComplain}
      userRoleSelectName={COMPANY_MEMBERS_FORM_FIELD_NAME.USER_ROLE_ID}
      userRoleSelectOption={userRoleSelectOption}
      initialValueFormModalForm={initialValueFormModalForm()}
      onSubmitForModalForm={sendNewUserRoleInCompany}
      isPopoverOpen={popoverState.isPopoverOpen}
      openPopover={openPopover}
      closePopover={closePopover}
      isModalOpen={modalState.isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      username={modalState.selectedUser.name}
      initialValueForInviteUserForm={initialValueForInviteUserForm()}
      inviteUserFieldName={COMPANY_MEMBERS_FORM_FIELD_NAME.INVITE_USER_EMAIL}
      onSubmitForInviteUserForm={sendInviteOnCompanyToUser}
    />
  );
}
const popoverInitialState = {
  isPopoverOpen: null,
  selectedUser: { name: null, id: null, role: null },
};
const modalInitialState = {
  isModalOpen: null,
  selectedUser: { name: null, id: null, role: null },
};
const userRoleSelectOption = [
  { id: 0, tid: 'Основатель' },
  { id: 1, tid: 'Менеджер' },
  { id: 2, tid: 'Уволен' },
];
const companyMembersListData = [
  {
    id: 1,
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    id: 1,
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
];
