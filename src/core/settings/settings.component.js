import styled from 'styled-components';

import { Settings2FAContainer } from '../settings-2fa';
import { SettingEmailContainer } from '../settings-email';
import { SettingsPhoneContainer } from '../settings-phone';
import { SettingsPasswordContainer } from '../settings-password';
import { SettingsAdvertContainer } from '../settings-advert';
import { SettingsNotificationContainer } from '../settings-notification';
import { SettingsAvatarContainer } from '../settings-avatar';

import { PrimaryBox } from '../../lib/elements/box';
import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing } from '../../lib/theme';

export function SettingsComponent() {
  return (
    <div>
      <SectionTitle tid="Настройки безопасности" />
      <Container>
        <Settings2FAContainer />
      </Container>
      <Container>
        <SettingEmailContainer />
      </Container>
      <Container>
        <SettingsPhoneContainer />
      </Container>
      <Container>
        <SettingsPasswordContainer />
      </Container>
      <SectionTitle tid="Другое" />
      <Container>
        <SettingsAdvertContainer />
      </Container>
      <Container>
        <SettingsNotificationContainer />
      </Container>
      <SectionTitle tid="Персонализация" />
      <Container>
        <SettingsAvatarContainer />
      </Container>
    </div>
  );
}

const SectionTitle = styled(PrimaryTitleText)`
  margin-bottom: ${spacing(6)};
`;

const Container = styled(PrimaryBox)`
  width: 500px;
  margin: ${spacing(6)} 0;
`;
