import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText, PrimaryText } from '../../../../lib/elements/text';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { CircleDivider } from '../../../../lib/elements/divider';

export function CompanyMembersItemComponent(props) {
  const { avatar, name, role, inTheCompany } = props.data;
  return (
    <Container>
      <IndentLayout type="STANDART">
        <Content>
          <InfoCase>
            <Avatar src={avatar} />
            <SectionLayout type="SMALL">
              <Name tid={name} />
              <Desctiption>
                {role}
                &nbsp;
                <CircleDivider />
                <Time tid={inTheCompany} />
              </Desctiption>
            </SectionLayout>
          </InfoCase>
          <OptionIcon />
        </Content>
      </IndentLayout>
    </Container>
  );
}
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const InfoCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;
const Name = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Container = styled(PrimaryBox)`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
