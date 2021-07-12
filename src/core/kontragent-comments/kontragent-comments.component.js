import { KontragentCommentsHeaderContainer } from './frame/kontragent-comments-header';
import { KontragentCommentsListComponent } from './frame/kontragent-comments-list';

import { KONTRAGENT_COMMENTS_LIST } from './kontragent-comments.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

export function KontragentCommentsComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <KontragentCommentsHeaderContainer
            companyName={'Компания Гермес-Электро'}
            companyType={'Общество с ограниченной ответственностью'}
          />
          <KontragentCommentsListComponent
            kontragentCommentsList={KONTRAGENT_COMMENTS_LIST}
          />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
