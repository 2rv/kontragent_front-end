import styled from 'styled-components';

import { PrimaryDivider } from '../../../../../../lib/elements/divider';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { SectionLayout } from '../../../../../../lib/elements/layout';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function ReviewsListComponent({ reviewsList }) {
  return (
    <Container type="MEDIUM">
      {reviewsList.map(({ avatar, author, time, text, status }, index) => (
        <CommentItem key={index}>
          <Avatar src={avatar} />
          <ContentCase>
            <div>
              <Author tid={author} />
              &nbsp;
              <Status tid={status.statusTid} statusId={status.statusId} />
            </div>
            <Text tid={text} />
            <Time tid={time} />
            <PrimaryDivider />
          </ContentCase>
        </CommentItem>
      ))}
    </Container>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  padding-right: ${spacing(6)};
  overflow: auto;
`;
const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;

const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 21px;
`;

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding-top: ${spacing(2)};
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const Status = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.PREMIUM;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;
