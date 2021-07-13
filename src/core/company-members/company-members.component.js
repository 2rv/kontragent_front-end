import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import {
  CompanyMembersListComponent,
  CompanyMembersFormComponent,
} from './frames';

export function CompanyMembersComponent(props) {
  const { memberItem } = props;
  return (
    <Container>
      <HeaderCase>
        <Title tid={`ООО "КОМПАНИЯ"`} />
        <Desctiption tid="Настройки вашей компании. Вы можете управлять списком участников и их ролями." />
      </HeaderCase>
      <CompanyMembersListComponent memberItem={memberItem} />
      <CompanyMembersFormComponent />
    </Container>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(8)};
  height: 100%;
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const HeaderCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
