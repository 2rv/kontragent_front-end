import styled from 'styled-components';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SecondaryText } from '../../../../lib/elements/text';
import { BasicButton, PrimaryButton } from '../../../../lib/elements/button';
import { THEME_COLOR } from '../../../../lib/theme';

export function SettingsDisableAdvertComponent() {
  return (
    <IndentLayout>
      <SectionLayout>
        <SectionLayout type="SMALL">
          <SecondaryTitleText tid="SETTINGS.ADVERT.TITLE" />
          <Subtitle tid="SETTINGS.ADVERT.SUBTITLE" />
        </SectionLayout>

        <SectionLayout type="MEDIUM">
          <Button tid="SETTINGS.ADVERT.BUTTON.FIRST" />
          <PrimaryButton tid="SETTINGS.ADVERT.BUTTON.SECOND" />
        </SectionLayout>
      </SectionLayout>
    </IndentLayout>
  );
}
const Button = styled(BasicButton)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const Subtitle = styled(SecondaryText)`
  line-height: 1.5;
`;
