import styled from 'styled-components';

import { ReactComponent as Search } from '../../../../asset/svg/search.svg';

import { PrimaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

export function MySupportRequestsListHeaderComponent() {
  return (
    <Container>
      <HeaderContainer>
        <Title tid="Поддержка" />
        <NewRequestButton tid="Новый запрос" />
      </HeaderContainer>
      <FieldContainer>
        <Field placeholder="Найти запрос" />
        <SearchIcon />
      </FieldContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(5)};
`;

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const Field = styled(PrimaryInput)`
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const NewRequestButton = styled(SecondaryButton)`
  width: 226px;
`;
