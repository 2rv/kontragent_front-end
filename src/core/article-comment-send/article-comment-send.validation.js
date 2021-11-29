import { ARTICLE_COMMENT_SEND_DATA_NAME } from './article-comment-send.constant';
import { validate } from '../../main/validate';
import { required } from '../../main/validate/validate.service';

const config = {
  [ARTICLE_COMMENT_SEND_DATA_NAME.TEXT]: [required],
};

export const articleCommentSendValidation = (values) =>
  validate(values, config);
