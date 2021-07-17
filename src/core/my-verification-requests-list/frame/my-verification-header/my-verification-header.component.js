import styled from 'styled-components';

import { SecondarySelect } from '../../../../lib/elements/field';
import { PrimaryInput, SecondaryInput } from '../../../../lib/elements/input';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function MyVerificationHeaderComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myVerificationSelectOption,
  } = props;
  return (
    <SectionLayout>
      <Title tid="Мои проверки" />
      <InputCase>
        <SecondaryInput placeholder="Найти тему" />
        {myVerificationSelectOption && (
          <SecondarySelect option={myVerificationSelectOption} />
        )}
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
