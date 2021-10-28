import React from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME } from '../company-account-item-member-delete.constant'
import { CompanyAccountItemMemberDelete } from '../company-account-item-member-delete.action'

export const CompanyAccountItemMemberDeleteComponent = (props) => {
    const { deleteState } = useSelector((state) => ({
        deleteState: state[COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME]
    }))

    const {
        memberId,
    } = props

    const dispatch = useDispatch()

    const handleDelete = async (memberId) => {
        dispatch(CompanyAccountItemMemberDelete(memberId))
    }

    return (
        <IconButton disabled={deleteState.form.pending} edge="end" aria-label="delete" onClick={() => handleDelete(memberId)}>
            <DeleteIcon />
        </IconButton>
    )
}