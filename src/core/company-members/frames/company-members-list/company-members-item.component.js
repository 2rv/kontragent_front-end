import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import {
  PrimaryTitleText,
  SecondaryText,
  PrimaryText,
} from '../../../../lib/elements/text';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';

export function CompanyMembersItemComponent(props) {
  const { avatar, name, role, inTheCompany } = props;
  return (
    <Container>
      <InfoCase>
        <Avatar src={avatar} />
        <TextCase>
          <Name tid={name} />
          <Desctiption>
            {role} <Time tid={`· ${inTheCompany}`} />
          </Desctiption>
        </TextCase>
      </InfoCase>
      <OptionIcon />
    </Container>
  );
}
const Time = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const TextCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const InfoCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
const Name = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Container = styled.div`
  display: flex;
  padding: ${spacing(3)} ${spacing(4)};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  align-items: center;
  justify-content: space-between;
`;