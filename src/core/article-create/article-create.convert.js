import { ARTICLE_FIELD_NAME } from './article-create.type';

export function convertForCreateUpdate(formValues) {
  return {
    [ARTICLE_FIELD_NAME.ID]: formValues[ARTICLE_FIELD_NAME.ID],
    [ARTICLE_FIELD_NAME.TITLE]: formValues[ARTICLE_FIELD_NAME.TITLE],
    [ARTICLE_FIELD_NAME.ARTICLE]: formValues[ARTICLE_FIELD_NAME.ARTICLE],
    [ARTICLE_FIELD_NAME.DESCRIPTION]:
      formValues[ARTICLE_FIELD_NAME.DESCRIPTION],
  };
}
