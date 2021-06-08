import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';

import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SecondaryText } from '../../../../lib/elements/text';
import { SecondaryButton } from '../../../../lib/elements/button';
import { BasicButton } from '../../../../lib/elements/button';

export function SettingsDisableAdvertComponent() {
  return (
    <SectionLayout>
      <SectionLayout type="SMALL">
        <SecondaryTitleText tid="SETTINGS.ADVERT.TITLE" />
        <Subtitle tid="SETTINGS.ADVERT.SUBTITLE" />
      </SectionLayout>

      <SectionLayout type="MEDIUM">
        <BasicButton tid="SETTINGS.ADVERT.BUTTON.FIRST" />
        <SecondaryButton tid="SETTINGS.ADVERT.BUTTON.SECOND" />
      </SectionLayout>
    </SectionLayout>
  );
}

const Subtitle = styled(SecondaryText)`
  line-height: 1.5;
`;
