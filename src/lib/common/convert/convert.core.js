import { text } from '../text';
import {
  revisionStatusType,
  referalPaymentStatusType,
  paymentType,
  companyMemberType,
} from './convert.status';

export function convertRevisionStatus(status) {
  return { status: status, text: text(revisionStatusType[status]) };
}

export function convertPaymentType(type) {
  return { type: type, text: text(paymentType[type]) };
}

export function convertCompanyMemberRole(role) {
  return { role: role, text: text(companyMemberType[role]) };
}

export function convertReferalPaymentStatus(status) {
  return {
    status: status,
    text: text(referalPaymentStatusType[status]),
  };
}

export function convertFormatDate(timestamp) {
  return new Date(timestamp).toLocaleString().replace(/(.*)\D\d+/, '$1');
}

export function convertForatDataNotTime(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}
