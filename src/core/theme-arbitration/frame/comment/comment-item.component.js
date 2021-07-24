import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { SectionLayout } from '../../../../lib/elements/layout';

export function CommentItemComponent(props) {
  const { avatar, author, role, time, text, images } = props.data;
  const { roleColor, roleText } = RoleConverter(role);
  return (
    <Container>
      <Avatar src={avatar} />
      <ContentCase>
        <SectionLayout type="SMALL">
          <Line>
            <Author tid={author} />
            <Role roleColor={roleColor} tid={roleText} />
          </Line>
          <Text tid={text} />
          {images && <Image src={images} />}
          <Time tid={time} />
        </SectionLayout>
        <PrimaryDivider />
      </ContentCase>
    </Container>
  );
}
const Image = styled.img`
  min-height: 100px;
  max-height: 300px;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
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
  gap: ${spacing(3)};
`;
const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Role = styled(PrimaryText)`
  color: ${({ roleColor }) => roleColor};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
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
