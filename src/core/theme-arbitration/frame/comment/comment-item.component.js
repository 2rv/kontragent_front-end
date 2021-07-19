import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function CommentItemComponent(props) {
  const { avatar, author, role, time, text, images } = props;
  const { roleColor, roleText } = RoleConverter(role);
  return (
    <Container>
      <Avatar src={avatar} />
      <ContentCase>
        <Line>
          <Author tid={author} />
          <Role roleColor={roleColor} tid={roleText} />
        </Line>
        <Text tid={text} />
        {images && <Image src={images} />}
        <Time tid={time} />
        <PrimaryDivider />
      </ContentCase>
    </Container>
  );
}
const Image = styled.img`
  display: flex;
  height: 280px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Role = styled(PrimaryText)`
  color: ${({ roleColor }) => roleColor};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const ContentCase = styled.div`
  padding-top: ${spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const RoleConverter = (role) => {
  switch (role) {
    case 1:
      return {
        roleColor: THEME_COLOR.TEXT.PURPLE,
        roleText: 'THEME_ARBITRATION.ROLE.PLAINTIFF',
      };

    case 2:
      return {
        roleColor: THEME_COLOR.TEXT.ACCENT,
        roleText: 'THEME_ARBITRATION.ROLE.DEFENDANT',
      };

    default:
      return { roleColor: null, roleText: null };
  }
};
