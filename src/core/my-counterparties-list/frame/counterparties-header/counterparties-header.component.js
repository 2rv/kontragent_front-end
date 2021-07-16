import styled from 'styled-components';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SecondarySelect } from '../../../../lib/elements/field';

export function CounterpartiesHeaderComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCounterpartiesSortOption,
  } = props;
  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid="MY_COUNTERPARTIES_LIST.TITLE" />
        <ActionsCase>
          <PaginationCase>
            <PaginationButton tid="1" pageActive />
            <PaginationButton tid="2" />
            <PaginationButton tid="3" />
            <PaginationButton tid="4" />
          </PaginationCase>
          <Button tid="Заказать проверку" />
        </ActionsCase>
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="MY_COUNTERPARTIES_LIST.INPUT_PLACEHOLDER" />
        <SecondarySelect option={myCounterpartiesSortOption} />
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
const ActionsCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
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
const Button = styled(PrimaryButton)`
  height: 46px;
  width: 226px;
`;
