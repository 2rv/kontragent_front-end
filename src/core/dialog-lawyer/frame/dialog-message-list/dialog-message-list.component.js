import styled from 'styled-components';
import { DialogMessageListItemComponent } from './dialog-message-list-item.component';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option.svg';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { TextareaField } from '../../../../lib/elements/field';
import {
  spacing,
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
} from '../../../../lib/theme';

export function DialogMessageListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogLawyerMessageListData,
  } = props;

  return (
    <Container>
      <Header>
        <Line>
          <div>
            <FullName>Илья Зинченко</FullName>
            <LawyerText>Юрист</LawyerText>
          </div>
          <OptionIcon />
        </Line>
        <HeaderContentDescription>
          <DescriptionLightGreyText tid="Платные запросы юристам позволяют получить быстрый и понятный ответ в требуемом вопросе," />
          <PrimaryText tid=" количество сообщений юристам ограничено." />
        </HeaderContentDescription>
        <HeaderContentDescription>
          <SecondaryText tid="Сообщений осталось" />
          &nbsp;
          <PrimaryText>25/10</PrimaryText>
        </HeaderContentDescription>
      </Header>
      <Content>
        {dialogLawyerMessageListData.map((data, index) => (
          <DialogMessageListItemComponent key={index} data={data} />
        ))}
      </Content>
      <Footer>
        <TextareaField isFile isSend placeholderTid="Напишите сообщение" />
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  background: ${THEME_COLOR.COLOR.BASE};
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(8)} ${spacing(2)} ${spacing(8)} ${spacing(8)};
  min-width: 400px;
  flex-grow: 2;
`;
const Header = styled.div`
  height: 100px;
  padding-right: ${spacing(5)};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
  gap: ${spacing(6)};
  padding-right: ${spacing(5)};
`;
const Footer = styled.div`
  height: auto;
  padding-right: ${spacing(5)};
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(2)};
  width: 100%;
`;
const FullName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  margin-right: ${spacing(2)};
`;
const LawyerText = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const HeaderContentDescription = styled.div`
  margin-top: ${spacing(4)};
`;
const DescriptionLightGreyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  line-height: 1.5;
`;
