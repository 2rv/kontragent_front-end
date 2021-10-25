import { text } from '../text';
import { revisionStatusType } from './convert.status';

export function convertRevisionStatus(status) {
  return { status: status, text: text(revisionStatusType[status]) };
}
