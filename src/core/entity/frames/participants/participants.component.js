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
              title="ENTITY.PARTICIPANTS.HEADER.TITLE"
              companyType="ENTITY.PARTICIPANTS.HEADER.COMPANY_TYPE"
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
  display: flex;
  height: fit-content;
`;
