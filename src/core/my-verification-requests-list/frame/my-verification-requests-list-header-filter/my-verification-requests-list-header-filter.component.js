import styled from 'styled-components';

import { SecondarySelect } from '../../../../lib/elements/field';
import { PrimaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

const selectOption = [
  { id: 0, tid: 'По времени запроса' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];

export function MyVerificationRequestsListHeaderFilterComponent() {
  return (
    <Container>
      <HeaderCase>
        <Title tid="Мои проверки" />
        <PaginationCase>
          <Button tid="1" pageActived={true} />
          <Button tid="2" />
          <Button tid="3" />
          <Button tid="4" />
        </PaginationCase>
      </HeaderCase>
      <InputCase>
        <Field placeholder="Найти тему" />
        {selectOption && <SecondarySelect option={selectOption} />}
      </InputCase>
    </Container>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const PaginationCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Button = styled(SecondaryButton)`
  background-color: ${({ pageActived }) =>
    !pageActived && THEME_COLOR.COLOR.BASE};
  color: ${({ pageActived }) => !pageActived && THEME_COLOR.COLOR.PRIMARY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Field = styled(PrimaryInput)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 229px);
  gap: ${spacing(4)};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
