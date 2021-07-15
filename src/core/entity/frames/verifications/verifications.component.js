import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { VerificationsListComponent } from './frame/verifications-list';

import { VERIFICATIONS_LIST } from './verifications.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function VerificationsComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="Проверки"
            companyType="Общество с ограниченной ответственностью"
            companyName={'"Компания Гермес-Электро"'}
          />
          <VerificationsListComponent verificationsList={VERIFICATIONS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
