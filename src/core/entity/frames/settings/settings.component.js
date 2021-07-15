import { HeaderComponent } from './frame/header';
import { FieldsComponent } from './frame/fields';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';

export function SettingsComponent(props) {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <FieldsComponent {...props} />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
