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
import { PrimaryLoader } from '../../../../lib/elements/loader';

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
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout type="LARGE">
            <SectionLayout type="MEDIUM">
              <Title tid="COMPANY_MEMBERS.LIST_BOX.TITLE_COMPANY_MEMBERS" />
              <Desctiption tid="COMPANY_MEMBERS.LIST_BOX.DESCRIPTION_BOX_LIST" />
            </SectionLayout>
            <SectionLayout>
              {companyMembersListData.map((data, index) => (
                <CompanyMembersItemComponent key={index} data={data} />
              ))}
            </SectionLayout>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </>
  );
}
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
