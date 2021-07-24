import styled from 'styled-components';
import { SecondaryInput } from '../../../../lib/elements/input';
import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function MySupportRequestsHeaderComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <SectionLayout type="LARGE">
      <HeaderContainer>
        <Title tid="SUPPORT.SUPPORT_REQUEST" />
        <NewRequestButton tid="SUPPORT.CREATE_REQUEST.HEADER" />
      </HeaderContainer>
      <SecondaryInput placeholder="SUPPORT.FIND_REQUEST" />
    </SectionLayout>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NewRequestButton = styled(PrimaryButton)`
  max-width: 226px;
`;
