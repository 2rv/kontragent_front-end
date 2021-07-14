import styled from 'styled-components';

import { Settings2FAContainer } from '../settings-2fa';
import { SettingEmailContainer } from '../settings-email';
import { SettingsPhoneContainer } from '../settings-phone';
import { SettingsPasswordContainer } from '../settings-password';
import { SettingsAdvertContainer } from '../settings-advert';
import { SettingsNotificationContainer } from '../settings-notification';
import { SettingsAvatarContainer } from '../settings-avatar';
import { SectionLayout } from '../../lib/elements/layout';

import { PrimaryBox } from '../../lib/elements/box';
import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing } from '../../lib/theme';

export function SettingsComponent() {
  return (
    <Container type="LARGE">
      <PrimaryTitleText tid="Настройки безопасности" />
      <PrimaryBox>
        <Settings2FAContainer />
      </PrimaryBox>
      <PrimaryBox>
        <SettingEmailContainer />
      </PrimaryBox>
      <PrimaryBox>
        <SettingsPhoneContainer />
      </PrimaryBox>
      <PrimaryBox>
        <SettingsPasswordContainer />
      </PrimaryBox>
      <PrimaryTitleText tid="Другое" />
      <PrimaryBox>
        <SettingsAdvertContainer />
      </PrimaryBox>
      <PrimaryBox>
        <SettingsNotificationContainer />
      </PrimaryBox>
      <PrimaryTitleText tid="Персонализация" />
      <PrimaryBox>
        <SettingsAvatarContainer />
      </PrimaryBox>
    </Container>
  );
}
const Container = styled(SectionLayout)`
  width: 100%;
`;
