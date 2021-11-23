import { validate } from '../../main/validate/validate.core';
import {
  required,
  minLength,
  maxLength,
  requiredArray,
} from '../../main/validate/validate.service';
import { ARTICLE_FIELD_NAME } from './article-create.type';

const config = {
  [ARTICLE_FIELD_NAME.TITLE]: [required, minLength(3), maxLength(50)],
  [ARTICLE_FIELD_NAME.DESCRIPTION]: [required, minLength(10)],
  [ARTICLE_FIELD_NAME.ARTICLE]: [
    (article) => requiredArray(article.blocks, 'VALIDATION.ARTICLE_REQIERED'),
  ],
};

export const formValidation = (values) => validate(values, config);
