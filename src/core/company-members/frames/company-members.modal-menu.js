import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';
import { SecondaryTextButton } from 'src/lib/elements/button';

export function CompanyMembersModalMenu(props) {
  const { userRemove, userChangeRole, userComplain } = props;

  return (
    <Column>
      <SecondaryTextButton tid="Удалить" onClick={userRemove} />
      <SecondaryTextButton tid="Сменить роль" onClick={userChangeRole} />
      <SecondaryTextButton tid="Пожаловаться" onClick={userComplain} />
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(2)};
`;
