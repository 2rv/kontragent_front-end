import styled from 'styled-components';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function MyCompaniesHeaderComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCompaniesSelectOption,
  } = props;
  return (
    <SectionLayout>
      <HeaderCase type="SMALL">
        <Title tid="Мои компании" />
        <Button tid="Добавить компанию" />
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="Найти компанию" />
        {myCompaniesSelectOption && (
          <SecondarySelect option={myCompaniesSelectOption} />
        )}
      </InputCase>
    </SectionLayout>
  );
}
const HeaderCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 226px;
  gap: ${spacing(4)};
  width: 100%;
`;
const Button = styled(SecondaryButton)`
  width: 226px;
  height: 46px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
