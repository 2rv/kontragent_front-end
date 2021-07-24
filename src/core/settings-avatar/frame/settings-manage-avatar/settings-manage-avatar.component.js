import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryButton, BasicButton } from '../../../../lib/elements/button';
import { spacing, THEME_COLOR } from '../../../../lib/theme';

export function SettingsManageAvatarComponent(props) {
  const { imageURL = '/static/img/tempSettingsAvatarImage.svg' } = props;

  return (
    <React.Fragment>
      <IndentLayout>
        <Title tid="SETTINGS.AVATAR.TITLE" />
        <Container>
          <Image src={imageURL} width={115} height={115} />
          <SectionLayout type="MEDIUM">
            <PrimaryButton tid="SETTINGS.AVATAR.BUTTON.FIRST" />
            <Button tid="SETTINGS.AVATAR.BUTTON.SECOND" />
          </SectionLayout>
        </Container>
      </IndentLayout>
    </React.Fragment>
  );
}
const Button = styled(BasicButton)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const Container = styled.div`
  display: grid;
  grid-column-gap: ${spacing(3)};
  grid-template-columns: 115px auto;
`;

const Title = styled(SecondaryTitleText)`
  padding-bottom: ${spacing(6)};
`;
