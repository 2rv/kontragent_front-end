import { text } from '../text';
import {
  revisionStatusType,
  referalAchieventStatusType,
} from './convert.status';

export function convertRevisionStatus(status) {
  return { status: status, text: text(revisionStatusType[status]) };
}

export function convertReferalAchievementStatus(status) {
  return {
    status: status,
    text: text(referalAchieventStatusType[status]),
  };
}
