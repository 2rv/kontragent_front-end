import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { ARTICLE_COMMENT_SEND_DATA_NAME } from '../article-comment-send.constant';

export const ArticleCommentSendFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    values,
    isPending,
    pageLoading,
    errors,
    touched,
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
                name={ARTICLE_COMMENT_SEND_DATA_NAME.TEXT}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ARTICLE_COMMENT_SEND_DATA_NAME.TEXT]}
                fullWidth
                multiline
                minRows={4}
                maxRows={20}
              />
            </Grid>

            <Grid lg={6} xs={12} item>
              <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                {text('COMMENT.ARTICLE_COMMENT_SEND.BUTTON')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
