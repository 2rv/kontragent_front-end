import styled from 'styled-components';

import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { ReactComponent as BacketIcon } from '../../../../asset/svg/backet-icon.svg';
import { SectionLayout } from '../../../../lib/elements/layout';
export function DialogMessageListItemComponent(props) {
  const { img, message } = props.data;

  return (
    <Layout my={message?.you}>
      <Container>
        <AvatarCase my={message?.you}>
          <Avatar src={img} />
        </AvatarCase>
        <Content>
          {message?.you && <InfoText tid="DIALOGS.DIALOG.YOUR_MESSAGE" />}
          <Case>
            <TextCase>
              <MessageText>{message?.text}</MessageText>
            </TextCase>

            {message?.file?.images && (
              <ImageList images={message.file.images.length}>
                {message?.file?.images.map((img, index) => (
                  <ImageCase key={index} src={img} />
                ))}
              </ImageList>
            )}
            {message?.file?.files && (
              <FileList>
                {message.file.files.map(
                  ({ filename, filetype, filesize }, index) => (
                    <FileCase key={index}>
                      <Button>
                        <BacketIcon />
                      </Button>
                      <FileInfo>
                        <BoldText>
                          {filename} {filetype}
                        </BoldText>
                        <InfoText>{filesize}</InfoText>
                      </FileInfo>
                    </FileCase>
                  ),
                )}
              </FileList>
            )}
          </Case>
          <InfoText>{message?.date}</InfoText>
        </Content>
      </Container>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  ${({ my }) => my && 'justify-content: flex-end;'}
`;
const AvatarCase = styled.div`
  display: flex;
  min-width: 30px;
  align-items: flex-end;
  margin-bottom: ${spacing(5)};
  order: ${({ my }) => (my ? 1 : 0)};
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-top: ${spacing(2)};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Container = styled.div`
  max-width: 50%;
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 1000px) {
    max-width: 80%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Case = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
  padding: ${spacing(4)};
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
`;
const MessageText = styled(SecondaryText)`
  line-height: 1.5;
`;
const InfoText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;
const ImageCase = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const ImageList = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
const FileList = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
const FileCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const TextCase = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  word-break: break-word;
`;
const BoldText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Button = styled(PrimaryButton)`
  min-height: 56px;
  min-width: 56px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 0 0;
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: 0;
`;
