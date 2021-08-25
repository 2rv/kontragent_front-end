import React from 'react';
import styled from 'styled-components';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { ReactComponent as StarFull } from '../../../../asset/svg/star.svg';

export function DialogUserListItemComponent(props) {
  const { img, name, status, statusId, content, favorite } = props.data;

  return (
    <Box>
      {content.unreadedMessages && (
        <UnreadBadge>
          <UnreadNumber>{content.unreadedMessages}</UnreadNumber>
        </UnreadBadge>
      )}
      <IndentLayout type="STANDART">
        <Container>
          <Avatar src={img} />
          <SectionLayout type="SMALL">
            <FullName>
              {name} <Status statusId={statusId}>{status}</Status>
            </FullName>
            <Content>
              <MessageText>
                {content.you && <BoldText>{content.you}&nbsp;</BoldText>}
                {content.message}
              </MessageText>
              {!content.you && (
                <DateCase>
                  &nbsp;
                  <CircleDivider />
                  &nbsp;
                  <Date>{content.date}</Date>
                </DateCase>
              )}
            </Content>
          </SectionLayout>
          {favorite && <StarIcon />}
        </Container>
      </IndentLayout>
    </Box>
  );
}
const StarIcon = styled(StarFull)`
  fill: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Box = styled(PrimaryBox)`
  position: relative;
  width: 100%;
`;
const UnreadBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.COLOR.VALIDATION};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UnreadNumber = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.BASE};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: ${spacing(4)};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const FullName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Status = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.VALIDATION;
      case 2:
        return THEME_COLOR.TEXT.SUCCESS;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;
const Content = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 0;
`;
const BoldText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const MessageText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.DARK_SECONDARY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const DateCase = styled.div`
  display: flex;
  align-items: center;
`;
const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
