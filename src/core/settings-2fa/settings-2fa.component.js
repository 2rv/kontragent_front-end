import styled from 'styled-components';

import { Settings2FAFormContainer } from './frame/settings-2fa-form.container';
import { SectionLayout } from '../../lib/elements/layout';
import { PrimaryText } from '../../lib/elements/text';
import { THEME_SIZE, THEME_VALUE } from '../../lib/theme';

export function Settings2FAComponent(props) {
  const { pageLoading, isPending, isError, isSuccess, errorMessage } = props;
  return (
    <SectionLayout>
      <Title tid="LOGIN.LOGIN_FORM.HEADER" />
      <Settings2FAFormContainer
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
      />
    </SectionLayout>
  );
}

const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
