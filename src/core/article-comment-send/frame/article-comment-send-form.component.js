import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { ARTICLE_COMMENT_SEND_DATA_NAME } from '../article-comment-send.constant';
import IconButton from '@mui/material/IconButton';

export const ArticleCommentSendFormComponent = (props) => {
  const { handleChange, handleBlur, handleSubmit, values } = props;

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldElement
        placeholder={text('COMMENT.ARTICLE_COMMENT_SEND.PLACEHOLDER')}
        name={ARTICLE_COMMENT_SEND_DATA_NAME.TEXT}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[ARTICLE_COMMENT_SEND_DATA_NAME.TEXT]}
        InputProps={{
          sx: { background: 'none' },
          endAdornment: (
            <IconButton type="sumbit" edge="end" color="primary">
              <Box sx={{ pb: 1 }}>
                <img src="/static/img/send.svg" />
              </Box>
            </IconButton>
          ),
        }}
      />
    </form>
  );
}
