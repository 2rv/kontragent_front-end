import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText, PrimaryText } from '../../../../lib/elements/text';
import { CompanyMembersItemComponent } from './company-members-item.component';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';

export function CompanyMembersListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    companyMembersListData,
  } = props;
  return (
    <Container>
      <SectionLayout type="MEDIUM">
        <Title tid="COMPANY_MEMBERS.LIST_BOX.TITLE_COMPANY_MEMBERS" />
        <Desctiption tid="COMPANY_MEMBERS.LIST_BOX.DESCRIPTION_BOX_LIST" />
      </SectionLayout>
      <List>
        {companyMembersListData.map((data, index) => (
          <CompanyMembersItemComponent key={index} data={data} />
        ))}
      </List>
    </Container>
  );
}
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
`;
const List = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  padding-right: ${spacing(5)};
`;
