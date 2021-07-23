import styled from 'styled-components';
import { ReactComponent as OptionIcon } from '../../../../../../asset/svg/option-icon.svg';
import { IndentLayout } from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { CircleDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';
import { BaseList } from '../../../../../../lib/elements/list';

export function ParticipantsListComponent(props) {
  const { participantsListData } = props;
  return (
    <BaseList
      listData={participantsListData}
      skeletonAction={false}
      itemBackground={THEME_COLOR.COLOR.SECONDARY}
    >
      {(props) => {
        const { image, name, status, lastVisit } = props;
        return (
          <Container>
            <Content>
              <Avatar src={image} />
              <Column>
                <FullnameText>{name}</FullnameText>
                <Line>
                  <StatusText tid={status} />
                  <CircleDivider />
                  <Date>{lastVisit}</Date>
                </Line>
              </Column>
            </Content>
            <OptionIcon />
          </Container>
        );
      }}
    </BaseList>
  );
}
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const FullnameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const StatusText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
