import React from 'react';
import styled from 'styled-components';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  CircleDivider,
  PrimaryDivider,
} from '../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';

export function DialogListItemComponent(props) {
  const { img, name, status, statusId, content } = props;

  return (
    <React.Fragment>
      <Box>
        {content.unreadedMessages && (
          <Unread>{content.unreadedMessages}</Unread>
        )}
        <IndentLayout type="SMALL">
          <Container>
            <UserImage src={img} />
            <SectionLayout type="SMALL">
              <Content>
                <FullName>{name}</FullName>
                <Status statusId={statusId}>{status}</Status>
              </Content>
              <Content>
                <ContentMessage>
                  <div>
                    <YouText>
                      {content.you ? <>{content.you}&nbsp;</> : null}
                    </YouText>
                    <MessageText>{content.message}</MessageText>
                  </div>
                </ContentMessage>
                {!content.you && <Date>{content.date}</Date>}
              </Content>
            </SectionLayout>
          </Container>
        </IndentLayout>
      </Box>
      {statusId === 0 ? <Divider /> : null}
    </React.Fragment>
  );
}

const Box = styled(PrimaryBox)`
  position: relative;
`;

const Unread = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${THEME_COLOR.COLOR.VALIDATION};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME_COLOR.TEXT.BASE};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: ${spacing(4)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};
`;

const ContentMessage = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;

  div {
    display: table-cell;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
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

const YouText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const MessageText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.DARK_SECONDARY};
  display: inline;
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const Divider = styled(PrimaryDivider)`
  background: ${THEME_COLOR.COLOR.BASE};
`;
