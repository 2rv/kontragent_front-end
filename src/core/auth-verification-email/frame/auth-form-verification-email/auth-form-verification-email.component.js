import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { PrimaryTitleText, PrimaryText } from '../../../../lib/elements/text';
import { PrimaryLoader } from '../../../../lib/elements/loader';

export function AuthFormVerificationEmailComponent(props) {
  const { pageLoading, isPending, isError, errorMessage, sendCode } = props;

  const isSubmitDisabled = () => {
    return pageLoading || isPending;
  };
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <SectionLayout>
        <PrimaryTitleText tid="AUTH_VERIFICATION_EMAIL.HEADER" />
        <SectionLayout type="MEDIUM">
          <Message tid="AUTH_VERIFICATION_EMAIL.MESSAGE" />

          <SecondaryButton
            onClick={sendCode}
            tid="AUTH_VERIFICATION_EMAIL.BUTTON"
            disabled={isSubmitDisabled()}
          />
        </SectionLayout>
        {(isError || errorMessage) && (
          <ErrorAlert tid={`ERROR.${errorMessage}`} />
        )}
      </SectionLayout>
    </React.Fragment>
  );
}

const Message = styled(PrimaryText)`
  line-height: 1.5;
`;
