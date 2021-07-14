import styled from 'styled-components';

import { ReactComponent as Search } from '../../../../asset/svg/search.svg';

import { SecondarySelect } from '../../../../lib/elements/field';
import { PrimaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

const selectOption = [
  { id: 0, tid: 'По времени' },
  { id: 1, tid: 'По автору' },
  { id: 2, tid: 'По имени' },
];

export function BookReviewHeaderComponent() {
  return (
    <Container>
      <HeaderCase>
        <Title tid="Книги" />
        <SecondaryButton tid="Загрузить книгу" />
      </HeaderCase>
      <InputCase>
        <FieldContainer>
          <Field placeholder="Найти книгу" />
          <SearchIcon />
        </FieldContainer>
        {selectOption && <SecondarySelect option={selectOption} />}
      </InputCase>
    </Container>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const HeaderCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 250px);
  align-items: center;
`;

const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 250px);
  gap: ${spacing(4.5)};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;

const FieldContainer = styled.div`
  position: relative;
`;

const Field = styled(PrimaryInput)`
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 12px;
  right: 12px;
`;
