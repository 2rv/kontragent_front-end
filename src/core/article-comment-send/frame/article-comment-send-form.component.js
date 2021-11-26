import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { ARTICLE_COMMENT_SEND_DATA_NAME } from '../article-comment-send.constant';
import IconButton from '@mui/material/IconButton';

export const ArticleCommentSendFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    isPending,
    pageLoading,
  } = props;

  const isSubmitDisabled = () => {
    return isPending || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid sx={{ px: 0 }} columnSpacing={4}>
          <Grid
            spacing={3}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Grid xs={12} item>
              <TextFieldElement
                placeholder={text('COMMENT.ARTICLE_COMMENT_SEND.PLACEHOLDER')}
                name={ARTICLE_COMMENT_SEND_DATA_NAME.TEXT}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ARTICLE_COMMENT_SEND_DATA_NAME.TEXT]}
                fullWidth
                minRows={4}
                maxRows={20}
                InputProps={{
                  endAdornment: (
                    <IconButton type="sumbit" edge="end" color="primary">
                      <Box sx={{ pb: 4 }}>
                        <img
                          style={{
                            marginTop: '12px',

                            display: 'block',
                          }}
                          src="/static/img/send.svg"
                        />
                      </Box>
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
