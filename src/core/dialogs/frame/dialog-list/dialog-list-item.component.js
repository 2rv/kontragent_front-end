import styled from 'styled-components';

import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CicleDivider, PrimaryDivider } from '../../../../lib/elements/divider';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function DialogListItemComponent(props) {
  const {
    img,
    name,
    status,
    statusId,
    content,
  } = props;

  return (
    <>
      <Box>
        {content.unreadedMessages && <Unread>{content.unreadedMessages}</Unread>}
        <IndentLayout type="SMALL">
          <Container>
            <ImageContainer>
              <img src={img} />
            </ImageContainer>
            <ContentLayout type="SMALL">
              <Content>
                <Name>{name}</Name>
                <Status statusId={statusId}>{status}</Status>
              </Content>
              <Content>
                <MessageFragment>
                  <YouText>{content.you ? content.you : null} </YouText>
                  {content.message}
                </MessageFragment>
                <CicleDivider />
                <Date>{content.date}</Date>
              </Content>
            </ContentLayout>
          </Container>
        </IndentLayout>
      </Box>
      {content.you ? <Divider /> : null}
    </>
  );
}

const Box = styled(PrimaryBox)`
  position: relative;
  margin: ${spacing(4)} 0;
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

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin-right: ${spacing(4)};

  img {
    width: 56px;
    height: 56px;
  }
`;

const ContentLayout = styled(SectionLayout)`
  margin-left: ${spacing(4)};
`;

const Content = styled.div`
  display: inline-flex;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${spacing(2)};
  align-items: center;
`;

const Name = styled(PrimaryText)`
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

const MessageFragment = styled.div`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.DARK_SECONDARY};
`;

const YouText = styled.span`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const Divider = styled(PrimaryDivider)`
  background: ${THEME_COLOR.COLOR.BASE};
`;
