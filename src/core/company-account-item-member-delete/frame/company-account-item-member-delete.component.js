import React from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { CompanyAccountItemMemberDelete } from '../company-account-item-member-delete.action'

export const CompanyAccountItemMemberDeleteComponent = (props) => {
    const {
        memberId,
        isPending,
    } = props

    const dispatch = useDispatch()

    const handleDelete = async (memberId) => {
        dispatch(CompanyAccountItemMemberDelete(memberId))
    }

    return (
        <IconButton disabled={isPending} edge="end" aria-label="delete" onClick={() => handleDelete(memberId)}>
            <DeleteIcon />
        </IconButton>
    )
}