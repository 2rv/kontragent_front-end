import { validate } from '../../main/validate/validate.core';
import {
  required,
  minLength,
  requiredArray,
  minLengthArray,
} from '../../main/validate/validate.service';
import { ARTICLE_FIELD_NAME } from './article-create.type';

const config = {
  [ARTICLE_FIELD_NAME.NAME]: [required, minLength(3)],
  [ARTICLE_FIELD_NAME.MODIFIER]: [],
  [ARTICLE_FIELD_NAME.CATEGORIES]: [],
  [ARTICLE_FIELD_NAME.IMAGES]: [required, requiredArray],
};

export const formValidation = (values) => validate(values, config);
