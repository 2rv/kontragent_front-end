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

const arbitrationListData = [
  {
    id: 'uuid12345',
    title: 'Проерка CRM Katovice',
    status: 'Решён',
    text: 'Подозрение в нарушений налоговых правил',
    time: 'Неделю назад',
  },
  {
    id: 'uuid12345',
    title: 'Проерка CRM Katovice',
    status: 'Решён',
    text: 'Подозрение в нарушений налоговых правил',
    time: 'Неделю назад',
  },
  {
    id: 'uuid12345',
    title: 'Проерка CRM Katovice',
    status: 'Решён',
    text: 'Подозрение в нарушений налоговых правил',
    time: 'Неделю назад',
  },
];

export function SupportRequestListCardItem() {
  return (
    <CardBody
      title={<TitlePrimary tid="Мои запросы в поддержку" />}
      action={<Find />}
      content={
        <BaseList
          listData={arbitrationListData}
          itemBackground={THEME_COLOR.COLOR.SECONDARY}
        >
          {(props) => {
            const { id, title, status, text, time } = props;
            return (
              <Container>
                <Content>
                  <Title tid={title} />
                  <Status tid={status} />
                </Content>
                <Content>
                  <Message tid={text} />
                  <Line>
                    <CircleDivider />
                    <Time tid={time} />
                  </Line>
                </Content>
              </Container>
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
const Container = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  gap: ${spacing(2)};
`;
const Line = styled.div`
  display: flex;
  min-width: fit-content;
  flex-wrap: nowrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  min-width: 0;
  gap: ${spacing(2)};
  justify-content: space-between;
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
const Status = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const ColoredText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;
