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
            title="Настройка компании"
            companyType="Общество с ограниченной ответственностью"
            companyName={'"Компания Гермес-Электро"'}
          />
          <FieldsComponent {...props} />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
