import styled from 'styled-components';
import Image from 'next/image';
import { PrimaryChatPreviewPropTypes } from './type.chat-preview';
import { PrimaryBox } from '../box';
import { IndentLayout } from '../layout';
import { SectionLayout } from '../layout';
import { PrimaryText, SecondaryText } from '../text';
import { CicleDivider } from '../divider';
import { THEME_COLOR, THEME_VALUE, THEME_SIZE, spacing } from 'src/lib/theme';

export function PrimaryChatPreview(props: PrimaryChatPreviewPropTypes) {
  const { id, numberOfUnread, image, name, messageFragmet, date, status } =
    props;
  return (
    <Box>
      <Unread>{numberOfUnread}</Unread>
      <IndentLayout type="SMALL">
        <Container>
          <ImageContainer>
            <Image src={image} layout="fill" />
          </ImageContainer>
          <ContentLayout type="SMALL">
            <Content>
              <Name>{name}</Name>
              <Status statusId={id}>{status}</Status>
            </Content>
            <Content>
              <MessageFragment>{messageFragmet}</MessageFragment>
              <CicleDivider />
              {date && <Date>{date}</Date>}
            </Content>
          </ContentLayout>
        </Container>
      </IndentLayout>
    </Box>
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

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 56px;
  height: 56px;
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
  color: ${(props: { statusId: number }) => {
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
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.DARK_SECONDARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
