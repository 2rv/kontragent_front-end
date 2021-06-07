import styled from 'styled-components';

import { Settings2FAFormContainer } from './frame/settings-2fa-form.container';
import { PrimaryText } from '../../lib/elements/text';
import { THEME_SIZE, THEME_VALUE } from '../../lib/theme';

export function Settings2FAComponent(props) {
  const { pageLoading, isPending, isError, isSuccess, errorMessage } = props;
  return (
    <Settings2FAFormContainer
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
