import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';
import {
  PrimaryTitleText,
  SecondaryText,
  PrimaryText,
} from '../../../lib/elements/text';
import { PrimaryField } from '../../../lib/elements/field';
import { PrimaryButton } from '../../../lib/elements/button';
import { PrimaryLink } from '../../../lib/elements/link';
import { IndentLayout, SectionLayout } from '../../../lib/elements/layout';
import { PrimaryBox } from '../../../lib/elements/box';

export function CompanyMembersForm(props) {
  const {
    isSuccess,
    pageLoading,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    inviteUserFieldName,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="MEDIUM">
          <Title tid="COMPANY_MEMBERS.FIND_BOX.ADD_NEW_MEMBER" />
          <FieldCase onSubmit={handleSubmit}>
            <PrimaryField
              placeholderTid="COMPANY_MEMBERS.FIND_BOX.EMAIL_USER"
              name={inviteUserFieldName}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[inviteUserFieldName]}
              error={isFieldError(inviteUserFieldName)}
            />
            <PrimaryButton
              disabled={isSubmitDisabled()}
              tid="COMPANY_MEMBERS.FIND_BOX.INVITE"
            />
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
const FieldCase = styled.form`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: 1fr 226px;
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
