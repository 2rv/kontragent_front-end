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
    <Container my={message?.you}>
      <InfoCase>
        {message?.you && <InfoText tid="DIALOGS.DIALOG.YOUR_MESSAGE" />}
      </InfoCase>
      <Content my={message?.you}>
        <Avatar my={message?.you} src={img} />
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
      </Content>
      <InfoCase>
        <InfoText>{message?.date}</InfoText>
      </InfoCase>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  ${({ my }) => my && 'margin-left: auto'};
`;
const InfoCase = styled.div`
  margin: 0 38px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing(2)};
  ${({ my }) => (my ? 'margin-left: 38px;' : 'margin-right: 38px;')};
`;
const Avatar = styled.img`
  order: ${({ my }) => (my ? 1 : 0)};
  width: 30px;
  height: 30px;
  margin-top: ${spacing(2)};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
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
  display: flex;
  flex-wrap: wrap;
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
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: 0;
`;
