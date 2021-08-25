import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../lib/elements/text';
import { SectionLayout } from '../../../lib/elements/layout';

export function CompanyMembersHeader(props) {
  const { companyName } = props;

  return (
    <SectionLayout type="SMALL">
      <Title tid={companyName} />
      <Desctiption tid="COMPANY_MEMBERS.DESCRIPTION" />
    </SectionLayout>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
