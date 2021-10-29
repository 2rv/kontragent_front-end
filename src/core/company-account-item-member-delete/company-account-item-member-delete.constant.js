export const COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ROUTE_PATH =
    '/company/[companyId]/member/[companyMemberId]'

export const COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME = 'COMPANY_ACCOUNT_ITEM_MEMBER_DELETE'

export const COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ROUTE_PATH_DYNAMIC = (
    { companyId } = {
        companyId: '[companyId]',
    },
    { companyMemberId } = {
        companyMemberId: '[companyMemberId]'
    },
) => `/company/${companyId}/member/${companyMemberId}`

export const COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE = {
    DELETE_PENDING: 'COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.FORM_PENDING',
    DELETE_SUCCESS: 'COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.FORM_SUCCESS',
    DELETE_ERROR: 'COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_ACTION_TYPE.FORM_ERROR',
};