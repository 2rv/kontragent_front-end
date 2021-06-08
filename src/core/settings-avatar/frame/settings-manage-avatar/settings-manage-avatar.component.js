import styled from 'styled-components';

import Image from 'next/image';

import { SectionLayout } from '../../../../lib/elements/layout';

import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SecondaryButton } from '../../../../lib/elements/button';
import { BasicButton } from '../../../../lib/elements/button';
import { spacing } from '../../../../lib/theme';

export function SettingsManageAvatarComponent(props) {
  const { imageURL = '/static/img/tempSettingsAvatarImage.svg' } = props;

  return (
    <>
      <Title tid="SETTINGS.AVATAR.TITLE" />
      <Container>
        <Image src={imageURL} width={115} height={115} />
        <SectionLayout type="MEDIUM">
          <BasicButton tid="SETTINGS.AVATAR.BUTTON.FIRST" />
          <SecondaryButton tid="SETTINGS.AVATAR.BUTTON.SECOND" />
        </SectionLayout>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-column-gap: ${spacing(3)};
  grid-template-columns: 115px auto;
`;

const Title = styled(SecondaryTitleText)`
  padding-bottom: ${spacing(6)};
`;
