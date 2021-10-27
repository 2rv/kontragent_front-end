import React from 'react';
import { CompanyAccountItemMemberDeleteComponent } from './frame/company-account-item-member-delete.component'

export function CompanyAccountItemMemberDeleteContainer(props) {

    const {
        itemIndex,
        companyMemberId
    } = props

    return (
        <CompanyAccountItemMemberDeleteComponent
            memberId={companyMemberId}
            itemIndex={itemIndex}
        />
    )
}