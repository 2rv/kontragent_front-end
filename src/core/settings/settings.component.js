import styled from 'styled-components';
import { Settings2FAContainer } from '../settings-2fa';
import { PrimaryBox } from '../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
export function SettingsComponent() {
  return (
    <Container>
      <SectionLayout>
        <PrimaryBox>
          <IndentLayout>
            <Settings2FAContainer />
          </IndentLayout>
        </PrimaryBox>
      </SectionLayout>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 1fr) 1fr;
`;
