import { validate } from '../../main/validate/validate.core';
import {
  required,
  minLength,
  maxLength,
  requiredArray,
} from '../../main/validate/validate.service';
import { EDIT_ARTICLE_FIELD_NAME } from './article-edit.type';

const config = {
  [EDIT_ARTICLE_FIELD_NAME.TITLE]: [required, minLength(3), maxLength(50)],
  [EDIT_ARTICLE_FIELD_NAME.DESCRIPTION]: [required],
  [EDIT_ARTICLE_FIELD_NAME.ARTICLE]: [
    (article) => requiredArray(article.blocks, 'VALIDATION.ARTICLE_REQIERED'),
  ],
};

export const formValidation = (values) => validate(values, config);
