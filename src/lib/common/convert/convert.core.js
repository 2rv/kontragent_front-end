import { text } from '../text';
import {
  revisionStatusType,
  referalAchieventStatusType,
  paymentType,
} from './convert.status';

export function convertRevisionStatus(status) {
  return { status: status, text: text(revisionStatusType[status]) };
}

export function convertPaymentType(type) {
  return { type: type, text: text(paymentType[type]) };
}

export function convertReferalAchievementStatus(status) {
  return {
    status: status,
    text: text(referalAchieventStatusType[status]),
  };
}

export function convertFormatDate(timestamp) {
  return new Date(timestamp).toLocaleString().replace(/(.*)\D\d+/, '$1');
}

export function convertForatDataNotTime(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}
