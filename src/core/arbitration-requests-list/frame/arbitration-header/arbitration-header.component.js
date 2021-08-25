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
      <Title tid="ARBITRATION_REQUESTS_LIST.TITLE" />
      <InputCase>
        <SecondaryInput placeholder="ARBITRATION_REQUESTS_LIST.INPUT_PLACEHOLDER" />
        <SecondarySelect option={arbitrationListSelectOption} />
      </InputCase>
    </SectionLayout>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 226px;
  gap: ${spacing(4)};
  width: 100%;
`;
