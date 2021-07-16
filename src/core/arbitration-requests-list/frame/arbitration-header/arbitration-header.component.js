import styled from 'styled-components';

import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ArbitrationHeaderComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    arbitrationListSelectOption,
  } = props;
  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid="Арбитраж" />
        <PaginationCase>
          <PaginationButton tid="1" pageActive />
          <PaginationButton tid="2" />
          <PaginationButton tid="3" />
          <PaginationButton tid="4" />
        </PaginationCase>
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="Найти тему" />
        <SecondarySelect option={arbitrationListSelectOption} />
      </InputCase>
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const PaginationCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const PaginationButton = styled(SecondaryButton)`
  background-color: ${({ pageActive }) =>
    !pageActive && THEME_COLOR.COLOR.BASE};
  color: ${({ pageActive }) => !pageActive && THEME_COLOR.COLOR.PRIMARY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 226px;
  gap: ${spacing(4)};
  width: 100%;
`;
