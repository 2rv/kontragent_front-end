import { ARTICLE_COMMENT_LIST_DATA_NAME } from './article-comment-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performArticleCommentListData = (row) => {
  return row.map((data) => ({
    [ARTICLE_COMMENT_LIST_DATA_NAME.ID]:
      data[ARTICLE_COMMENT_LIST_DATA_NAME.ID],

    [ARTICLE_COMMENT_LIST_DATA_NAME.TEXT]:
      data[ARTICLE_COMMENT_LIST_DATA_NAME.TEXT],

    [ARTICLE_COMMENT_LIST_DATA_NAME.CREATE_DATE]: convertFormatDate(
      data[ARTICLE_COMMENT_LIST_DATA_NAME.CREATE_DATE],
    ),

    [ARTICLE_COMMENT_LIST_DATA_NAME.FIRST_NAME]:
      data[ARTICLE_COMMENT_LIST_DATA_NAME.USER][
        ARTICLE_COMMENT_LIST_DATA_NAME.FIRST_NAME
      ],

    [ARTICLE_COMMENT_LIST_DATA_NAME.LAST_NAME]:
      data[ARTICLE_COMMENT_LIST_DATA_NAME.USER][
        ARTICLE_COMMENT_LIST_DATA_NAME.LAST_NAME
      ],

    [ARTICLE_COMMENT_LIST_DATA_NAME.ROLE]:
      data[ARTICLE_COMMENT_LIST_DATA_NAME.USER][
        ARTICLE_COMMENT_LIST_DATA_NAME.ROLE
      ],
  }));
};
