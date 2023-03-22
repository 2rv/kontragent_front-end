export const FEEDBACK_ADMIN_ITEM_ROUTE_PATH = '/admin/feedback/[feedbackId]';

export const FEEDBACK_ADMIN_ITEM_DYNAMIC_ROUTE_PATH = (
  { feedbackId } = { feedbackId: '[feedbackId]' },
) => `/admin/feedback/${feedbackId}`;

export const FEEDBACK_ADMIN_ITEM_API = {
  FEEDBACK_ADMIN_ITEM_LOAD: {
    ENDPOINT: (feedbackId) => `feedback/${feedbackId}`,
    TYPE: 'GET',
  },
};

export const FEEDBACK_ADMIN_ITEM_DATA_NAME = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  CREATE_DATE: 'createDate',
  FILES: 'files',
  ID: 'id',
  STATUS: 'status',
};
