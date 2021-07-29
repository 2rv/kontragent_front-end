import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ErrorPageIcon } from '../../asset/svg/error-page.svg';

import { setLinkRedirect } from '../../main/navigation';

import { SecondaryButton } from '../../lib/elements/button';
import { SecondaryText, PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';

export function ErrorPageComponent() {
  return (
    <Container>
      <ErrorPageIcon />
      <Title tid="ERROR_PAGE.TITLE" />
      <Description tid="ERROR_PAGE.DESCRIPTION" />
      <ToHomeButton tid="ERROR_PAGE.TO_HOME" onClick={setLinkRedirect('/')} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const Title = styled(PrimaryTitleText)`
  font-size: 36px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Description = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  text-align: center;
  line-height: 1.5;
  width: 525px;
`;

const ToHomeButton = styled(SecondaryButton)`
  width: 226px;
`;
