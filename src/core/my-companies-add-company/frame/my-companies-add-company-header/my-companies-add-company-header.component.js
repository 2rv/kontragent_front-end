import styled from 'styled-components';
import { PrimaryTitleText, PrimaryText } from '../../../../lib/elements/text';
import { SectionLayout } from '../../../../lib/elements/layout';
import { THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
export function MyCompaniesAddCompanyHeaderComponent() {
  return (
    <SectionLayout type="SMALL">
      <Header tid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.HEADER" />
      <Subheader tid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.SUBHEADER" />
    </SectionLayout>
  );
}

const Header = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const Subheader = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
