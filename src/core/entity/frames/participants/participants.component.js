import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { ParticipantsListComponent } from './frame/participants-list';
import { AddParticipantComponent } from './frame/add-participant';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ParticipantsComponent(props) {
  const { participantsListData } = props;
  return (
    <>
      <Container>
        <IndentLayout>
          <SectionLayout type="LARGE">
            <HeaderComponent
              title="ENTITY.PARTICIPANTS.HEADER.TITLE"
              companyType="ENTITY.PARTICIPANTS.HEADER.COMPANY_TYPE"
              companyName={'"Компания Гермес-Электро"'}
            />
            <ParticipantsListComponent
              participantsListData={participantsListData}
            />
          </SectionLayout>
        </IndentLayout>
      </Container>
      <AddParticipantComponent />
    </>
  );
}

const Container = styled(PrimaryBox)`
  height: fit-content;
`;
