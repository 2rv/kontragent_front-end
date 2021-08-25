import styled from 'styled-components';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
export function ThemeArbitrationHeaderComponent(props) {
  const { theme, role, description, time, status } = props;
  const { roleColor, roleText } = RoleConverter(role);

  return (
    <Container>
      <Line>
        <Title tid={theme} />
        <Role roleColor={roleColor} tid={roleText} />
      </Line>
      <Line>
        <Description tid={description} />
        <CircleDivider />
        <Time tid={time} />
        <CircleDivider />
        <Status tid={status} />
      </Line>
    </Container>
  );
}
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Role = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Description = styled(SecondaryText)``;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Status = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding-right: ${spacing(6)};
`;

const RoleConverter = (role) => {
  switch (role) {
    case 1:
      return {
        roleColor: THEME_COLOR.TEXT.ACCENT,
        roleText: 'THEME_ARBITRATION.COUNTERPARTY',
      };

    case 2:
      return {
        roleColor: THEME_COLOR.TEXT.PURPLE,
        roleText: 'THEME_ARBITRATION.ADMIN',
      };

    default:
      return { roleColor: null, roleText: null };
  }
};
