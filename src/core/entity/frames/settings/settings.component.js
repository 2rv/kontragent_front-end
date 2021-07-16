import { HeaderComponent } from '../header';
import { FieldsComponent } from './frame/fields';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';

export function SettingsComponent(props) {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="ENTITY.SETTING.HEADER.TITLE"
            companyType="ENTITY.SETTING.HEADER.COMPANY_TYPE"
            companyName={'"Компания Гермес-Электро"'}
          />
          <FieldsComponent {...props} />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
