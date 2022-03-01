import { USER_REFERAL_PAYMENT_LIST_DATA_NAME as DATA_NAME } from './user-referal-payment-list.constant';
import { convertReferalPaymentStatus } from '../../lib/common/convert/convert.core';

export const convertUserReferalPaymentList = (list) => {
  return list.map((payment) => ({
    [DATA_NAME.ID]: payment[DATA_NAME.ID],
    [DATA_NAME.CREATE_DATE]: payment[DATA_NAME.CREATE_DATE],
    [DATA_NAME.AMOUNT]: payment[DATA_NAME.AMOUNT],
    [DATA_NAME.TYPE]: convertReferalPaymentStatus(payment[DATA_NAME.TYPE]),
  }));
};
