import styled from 'styled-components';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { SectionLayout } from '../../../../lib/elements/layout';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

export function CompanyInviteHeaderComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    companyInviteSelectOption,
  } = props;
  return (
    <SectionLayout>
      <HeaderCase type="SMALL">
        <Title tid="Мои приглашения в компании" />
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="Найти пришлашение в компанию" />
        {companyInviteSelectOption && (
          <SecondarySelect option={companyInviteSelectOption} />
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
