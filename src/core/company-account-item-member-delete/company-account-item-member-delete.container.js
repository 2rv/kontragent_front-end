import React from 'react';
import { CompanyAccountItemMemberDeleteComponent } from './frame/company-account-item-member-delete.component'

export function CompanyAccountItemMemberDeleteContainer(props) {

    const {
        companyMemberId
    } = props

    return (
        <CompanyAccountItemMemberDeleteComponent
            memberId={companyMemberId}
        />
    )
}