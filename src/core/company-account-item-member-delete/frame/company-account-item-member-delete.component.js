import React from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { CompanyAccountItemMemberDelete } from '../company-account-item-member-delete.action'

export const CompanyAccountItemMemberDeleteComponent = (props) => {
    const {
        memberId,
        itemIndex,
    } = props

    const dispatch = useDispatch()

    const handleDelete = async (memberId, itemIndex) => {
        dispatch(CompanyAccountItemMemberDelete(memberId, itemIndex))
    }

    return (
        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(memberId, itemIndex)}>
            <DeleteIcon />
        </IconButton>
    )
}