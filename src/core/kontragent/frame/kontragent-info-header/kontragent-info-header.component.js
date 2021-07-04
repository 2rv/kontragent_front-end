import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { THEME_COLOR, THEME_VALUE, spacing } from '../../../../lib/theme';
import {
  SecondaryTitleText,
  SecondaryText,
  PrimaryText,
} from '../../../../lib/elements/text';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
export function KontragentInfoHeaderComponent(props) {
  const { company } = props.kontragentInfoHeaderFrameData;
  return (
    <SectionLayout type="LARGE">
      <SectionLayout type="MEDIUM">
        <SecondaryTitleText tid="KONTRAGENT.TAB.INFORMATION.HEADER.TITLE" />
        <SecondaryText>
          {company.type} <CompanyName>{company.name}</CompanyName>
        </SecondaryText>
      </SectionLayout>
      <ButtonContainer>
        <PrimaryButton tid="KONTRAGENT.TAB.INFORMATION.HEADER.DOWNLOAD_INFO_PDF" />
        <SecondaryButton tid="KONTRAGENT.TAB.INFORMATION.HEADER.CONSULTATION" />
      </ButtonContainer>
    </SectionLayout>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  column-gap: ${spacing(4)};
`;

const CompanyName = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
