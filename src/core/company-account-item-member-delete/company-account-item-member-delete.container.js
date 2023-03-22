import React, { useEffect } from 'react';
import { CompanyAccountItemMemberDeleteComponent } from './frame/company-account-item-member-delete.component';
import { isRequestPending } from '../../main/store/store.service';
import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME } from './company-account-item-member-delete.constant';
import { useSelector, useDispatch } from 'react-redux';
import { cleanupStore } from './company-account-item-member-delete.action';

export function CompanyAccountItemMemberDeleteContainer(props) {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME],
  }));

  const { companyMemberId } = props;

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <CompanyAccountItemMemberDeleteComponent
      isPending={isRequestPending(state.form)}
      memberId={companyMemberId}
    />
  );
}
