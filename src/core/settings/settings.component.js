import { Settings2FAContainer } from '../settings-2fa';
import { SettingEmailContainer } from '../settings-email';
import { SettingsPhoneContainer } from '../settings-phone';
import { SettingsPasswordContainer } from '../settings-password';
import { SettingsAdvertContainer } from '../settings-advert';
import { SettingsNotificationContainer } from '../settings-notification';
import { SettingsAvatarContainer } from '../settings-avatar';
import { SectionLayout } from '../../lib/elements/layout';
import { PrimaryTitleText } from '../../lib/elements/text';
export function SettingsComponent() {
  return (
    <SectionLayout type="LARGE">
      <PrimaryTitleText tid="SETTINGS.MAIN_SETTINGS.TITLE" />
      <Settings2FAContainer />
      <SettingEmailContainer />
      <SettingsPhoneContainer />
      <SettingsPasswordContainer />
      <PrimaryTitleText tid="SETTINGS.MAIN_SETTINGS.CATEGORY.OTHER" />
      <SettingsAdvertContainer />
      <SettingsNotificationContainer />
      <PrimaryTitleText tid="SETTINGS.MAIN_SETTINGS.CATEGORY.PERSONALIZATION" />
      <SettingsAvatarContainer />
    </SectionLayout>
  );
}
