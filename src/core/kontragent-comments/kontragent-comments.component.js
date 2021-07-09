import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { KontragentCommentsListComponent } from './frame/kontragent-comments-list';

import { KONTRAGENT_COMMENTS_LIST } from './kontragent-comments.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { spacing } from '../../lib/theme';

export function KontragentCommentsComponent() {
  return (
    <Box>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <KontragentCommentsListComponent kontragentCommentsList={KONTRAGENT_COMMENTS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin: ${spacing(7)};
`;
