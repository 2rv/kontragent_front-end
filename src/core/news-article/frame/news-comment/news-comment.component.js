import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { TextareaField } from '../../../../lib/elements/field';
import { ReactComponent as SendIcon } from '../../../../asset/svg/send-icon.svg';
import { ReactComponent as FileIcon } from '../../../../asset/svg/file-icon.svg';
import { SectionLayout } from '../../../../lib/elements/layout';
import { NewsCommentListItemComponent } from './news-comment-item.component';

export function NewsCommentComponent(props) {
  const { newsComment, myAvatar } = props;
  return (
    <SectionLayout type="MEDIUM">
      <Title tid="Комментарии" />
      <SectionLayout type="MEDIUM">
        {newsComment.map((data, index) => (
          <NewsCommentListItemComponent key={index} data={data} />
        ))}
      </SectionLayout>
      <FooterCase>
        <Avatar src={myAvatar} />
        <FieldCase>
          <TextareaField placeholderTid="Написать комментарий" />
          <ActionsCase>
            <FileIcon />
            <SendIcon />
          </ActionsCase>
        </FieldCase>
      </FooterCase>
    </SectionLayout>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  padding-right: ${spacing(2)};
`;
const ActionsCase = styled.div`
  position: absolute;
  right: ${spacing(4)};
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;
const FieldCase = styled.div`
  position: relative;
  display: grid;
  height: 56px;
  width: 100%;
  align-items: center;
`;
const FooterCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  margin-top: ${spacing(3)};
  align-items: center;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  line-height: 1.5;
`;
