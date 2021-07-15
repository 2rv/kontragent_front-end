import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import {
  CompanyMembersListContainer,
  CompanyMembersFormComponent,
} from './frames';
import { SectionLayout } from '../../lib/elements/layout';

export function CompanyMembersComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    companyMembersListData,
  } = props;
  return (
    <Container type="LARGE">
      <SectionLayout type="SMALL">
        <Title tid={`ООО "КОМПАНИЯ"`} />
        <Desctiption tid="COMPANY_MEMBERS.DESCRIPTION" />
      </SectionLayout>
      <CompanyMembersListContainer
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        companyMembersListData={companyMembersListData}
      />
      <CompanyMembersFormComponent />
    </Container>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
