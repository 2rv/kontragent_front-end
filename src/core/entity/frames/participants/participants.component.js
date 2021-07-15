import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { ParticipantsListComponent } from './frame/participants-list';
import { AddParticipantComponent } from './frame/add-participant';

import { PARTICIPANTS_LIST } from './participants.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ParticipantsComponent() {
  return (
    <>
      <Container>
        <IndentLayout>
          <SectionLayout>
            <HeaderComponent
              title="Участники компании"
              companyType="Общество с ограниченной ответственностью"
              companyName={'"Компания Гермес-Электро"'}
            />
            <ParticipantsListComponent participantsList={PARTICIPANTS_LIST} />
          </SectionLayout>
        </IndentLayout>
      </Container>
      <AddParticipantComponent />
    </>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
