import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { ReactEditorBlock } from '../../../lib/common/editor';

import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';
import { EDIT_ARTICLE_DYNAMIC_ROUTE_PATH } from '../../article-edit';

export function Article(props) {
  return (
    <Box sx={{ py: 4 }}>
      <Grid rowGap={3}>
        <Grid item>
          <ReactEditorBlock
            data={props.acticleData}
            minHeight={0}
            readOnly={true}
          />
        </Grid>
        {(props.isadmin || props.iscreator) && (
          <Grid item sx={{ mt: 4 }}>
            <Button
              fullWidth
              type="button"
              onClick={() => {
                return redirect(EDIT_ARTICLE_DYNAMIC_ROUTE_PATH, {
                  dynamic: true,
                  params: {
                    articleId: props.articleId,
                  },
                });
              }}
            >
              {text('ARTICLE.BUTTON_EDIT')}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
