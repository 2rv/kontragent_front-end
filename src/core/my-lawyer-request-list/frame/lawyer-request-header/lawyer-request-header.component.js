import styled from 'styled-components';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function LawyerRequestHeaderComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myLawyerRequestListSelectOption,
  } = props;
  return (
    <SectionLayout>
      <Title tid="MY_LAWYER_REQUEST.TITLE" />
      <InputCase>
        <SecondaryInput placeholder="MY_LAWYER_REQUEST.INPUT_PLACEHOLDER" />
        {myLawyerRequestListSelectOption && (
          <SecondarySelect option={myLawyerRequestListSelectOption} />
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
