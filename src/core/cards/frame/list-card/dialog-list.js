import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find.svg';
import { CardBody } from '../card-body';
import { PrimaryLink } from 'src/lib/elements/link';
import { BaseList } from 'src/lib/elements/list';
import { CircleDivider } from 'src/lib/elements/divider';

const dialogListData = [
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    username: 'Паша Новиков',
    role: 'Работяга',
    message: {
      my: true,
      text: 'Я вчера видел солека',
    },
    time: 'Вчера',
  },
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    username: 'Илья зинченко',
    role: 'Менеджер',
    message: {
      my: false,
      text: 'А я Скота Стёрлинга',
    },
    time: 'Вчера',
  },
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    username: 'АААААААААААААаааааааааааааАаааааааааааааааАФААА',
    role: 'Менеджер',
    message: {
      my: false,
      text: '........................................................................................',
    },
    time: '15.25',
  },
];

export function DialogListCardItem() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.IMPORTANT_DIALOGUES" />}
      action={<Find />}
      content={
        <Container>
          <BaseList
            listData={dialogListData}
            itemBackground={THEME_COLOR.COLOR.SECONDARY}
          >
            {(props) => {
              const {
                id,
                avatar,
                username,
                role,
                message: { my, text },
                time,
              } = props;
              return (
                <Content>
                  <Avatar src={avatar} />
                  <Column>
                    <Line>
                      <Title tid={username} />
                      <Role tid={role} />
                    </Line>
                    <Line>
                      {my && <ColoredText>Вы:</ColoredText>}
                      <Message tid={text} />
                      <CircleDivider />
                      <Time tid={time} />
                    </Line>
                  </Column>
                </Content>
              );
            }}
          </BaseList>
          <ShowMore tid="DASHBOARD_CARD.SHOW_MORE" />
        </Container>
      }
    />
  );
}

const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  gap: ${spacing(4)};
  align-items: center;
`;
const ShowMore = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: ${spacing(4)};
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${spacing(3)};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Column = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const Line = styled.div`
  display: inline-flex;
  min-width: 0;
  flex-wrap: nowrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const Title = styled(PrimaryText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Message = styled(SecondaryText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Time = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Role = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const ColoredText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
