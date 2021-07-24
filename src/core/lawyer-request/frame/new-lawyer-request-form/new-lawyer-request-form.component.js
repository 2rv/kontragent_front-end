import styled from 'styled-components';

import { ReactComponent as FileIcon } from '../../../../asset/svg/file.svg';

import {
  PrimarySelect,
  PrimaryField,
  TextareaField,
} from '../../../../lib/elements/field';
import {
  PrimaryTitleText,
  PrimaryText,
  SecondaryText,
} from '../../../../lib/elements/text';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  IndentLayout,
  SectionLayout,
  ButtonLayout,
} from '../../../../lib/elements/layout';

import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

export function NewLawyerRequestFormComponent(props) {
  const {
    fieldQuestionCategory,
    fieldYourQuestion,
    fieldProblemDescription,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout type="LARGE">
            <PrimaryTitleText tid="LAWYER_REQUEST.FORM.TITLE" />
            <SectionLayout type="MEDIUM">
              <PrimarySelect
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.QUESTION_CATEGORY"
                name={fieldQuestionCategory}
                onChange={handleChange}
                onBlur={handleBlur}
                option={[
                  {
                    id: 1,
                    tid: 'LAWYER_REQUEST.FORM.FIELDS.SELECT_OPTIONS.QUESTION_CATEGORY.PROTECT_FROM_ATTACKS',
                  },
                ]}
              />
              <PrimaryField
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.YOUR_QUESTION"
                placeholderTid="LAWYER_REQUEST.FORM.FIELDS.PLACEHOLDERS.YOUR_QUESTION"
                name={fieldYourQuestion}
                value={values[fieldYourQuestion]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextareaField
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.PROBLEM_DESCRIPTION"
                placeholderTid="LAWYER_REQUEST.FORM.FIELDS.PLACEHOLDERS.PROBLEM_DESCRIPTION"
                name={fieldProblemDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                row={8}
              />
            </SectionLayout>
            <SectionLayout type="SMALL">
              <PriceOfResolvingIssueText tid="LAWYER_REQUEST.FORM.PRICE_OF_RESOLVING_ISSUE" />
              <PriceText>
                500 <ValuteText tid="SIDEBAR.ACCOUNT_INFO_CURRENCY" />
              </PriceText>
            </SectionLayout>
            <ButtonLayout type="double">
              <SecondaryButton tid="LAWYER_REQUEST.FORM.FIELDS.BUTTONS.SEND_AND_PAY" />
              <PrimaryButton tid="LAWYER_REQUEST.FORM.FIELDS.BUTTONS.WATCH_MY_QUESTIONS" />
            </ButtonLayout>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </form>
  );
}
const PriceOfResolvingIssueText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const PriceText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
