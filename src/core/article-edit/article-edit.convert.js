import { EDIT_ARTICLE_FIELD_NAME } from './article-edit.type';

export function convertForEdit(formValues) {
  return {
    [EDIT_ARTICLE_FIELD_NAME.TITLE]:
      formValues[EDIT_ARTICLE_FIELD_NAME.TITLE],
    [EDIT_ARTICLE_FIELD_NAME.ARTICLE]:
      formValues[EDIT_ARTICLE_FIELD_NAME.ARTICLE],
    [EDIT_ARTICLE_FIELD_NAME.DESCRIPTION]:
      formValues[EDIT_ARTICLE_FIELD_NAME.DESCRIPTION],
  };
}
