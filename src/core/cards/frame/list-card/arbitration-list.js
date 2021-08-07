import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';
import { SecondarySelect } from '../../../../lib/elements/field';
import { CardBody } from '../card-body';
import { PrimaryLink } from 'src/lib/elements/link';
import { BaseList } from 'src/lib/elements/list';
import { CircleDivider } from 'src/lib/elements/divider';

const options = [
  { id: 1, tid: 'Сначала новые' },
  { id: 2, tid: 'Сначала старые' },
  { id: 3, tid: 'Сначала лучшие' },
];
const ArbitrationListData = [
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    title: 'Слово 1 слово 2 слово 3 слово 4 слово 5',
    author: 'Татьяна Лавелина',
    time: '40 минут назад',
    status: 'На рассмотрении',
  },
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    title: 'ааааааааааааааааааааааааааааааааааааааааааааааааааааа',
    author: 'Татьяна Лавелина',
    time: '40 минут назад',
    status: 'На рассмотрении',
  },
  {
    id: 'uuid12345',
    avatar:
      'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324.png',
    title: 'Жалоба по теме нарушения ',
    author: 'Татьяна Лавелина',
    time: '40 минут назад',
    status: 'На рассмотрении',
  },
];

export function ArbitrationListCardItem() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.ARBITRATION" />}
      action={<SecondarySelect dense option={options} />}
      content={
        <BaseList
          listData={ArbitrationListData}
          itemBackground={THEME_COLOR.COLOR.SECONDARY}
        >
          {(props) => {
            const { id, avatar, title, author, time, status } = props;
            return (
              <Content>
                <Avatar src={avatar} />
                <Column>
                  <Title tid={title} />
                  <Line>
                    <SecondaryText tid={author} />
                    <CircleDivider />
                    <Time tid={time} />
                    <CircleDivider />
                    <Status tid={status} />
                  </Line>
                </Column>
              </Content>
            );
          }}
        </BaseList>
      }
    />
  );
}

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${spacing(3)};
`;
const Column = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const ShowMore = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: ${spacing(4)};
`;
const Title = styled(PrimaryText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Time = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Status = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.WARNING};
`;
