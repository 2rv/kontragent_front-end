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
import { CompanyMembersItemComponent } from './company-members-item.component';

export function CompanyMembersListComponent(props) {
  const { memberItem } = props;
  return (
    <Container>
      <HeaderCase>
        <Title tid="Участники компании" />
        <Desctiption tid="Вы можете добавить новых участников либо сменить их роль." />
      </HeaderCase>
      <List>
        {memberItem.map((item) => (
          <CompanyMembersItemComponent {...item} />
        ))}
      </List>
    </Container>
  );
}
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(8)};
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const HeaderCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
