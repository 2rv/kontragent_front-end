import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import {
  PrimaryTitleText,
  SecondaryText,
  PrimaryText,
} from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryLink } from '../../../../lib/elements/link';
import {
  FieldLayout,
  IndentLayout,
  SectionLayout,
} from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';

export function CompanyMembersFormComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="MEDIUM">
          <Title tid="COMPANY_MEMBERS.FIND_BOX.ADD_NEW_MEMBER" />
          <FieldCase type="double">
            <PrimaryField placeholderTid="COMPANY_MEMBERS.FIND_BOX.EMAIL_USER" />
            <Button tid="COMPANY_MEMBERS.FIND_BOX.INVITE" />
          </FieldCase>
          <div>
            <TinyText tid="COMPANY_MEMBERS.FIND_BOX.DESCRIPTION_FAQ" />
            &nbsp;
            <TinyLink tid="COMPANY_MEMBERS.FIND_BOX.MORE_DETAILS" />
          </div>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
const FieldCase = styled.div`
  display: grid;
  gap: ${spacing(4)};
  grid-template-columns: 1fr auto;
`;
const Button = styled(PrimaryButton)`
  width: 226px;
`;
const TinyLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
  line-height: 1.5;
`;
const TinyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  line-height: 1.5;
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  line-height: 1.5;
`;
