import styled from 'styled-components';

import { ReactComponent as File } from '../../../../asset/svg/file.svg';

import { SelectField, PrimaryField, TextareaField } from '../../../../lib/elements/field';
import { PrimaryTitleText, PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryButton, SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

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
    <Box>
      <IndentLayout>
        <SectionLayout>
          <form onSubmit={handleSubmit}>
            <PrimaryTitleText tid="LAWYER_REQUEST.FORM.TITLE" />

            <FieldContainer>
              <SelectField
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.QUESTION_CATEGORY"
                name={fieldQuestionCategory}
                onChange={handleChange}
                onBlur={handleBlur}
                option={[{ id: 1, tid: 'LAWYER_REQUEST.FORM.FIELDS.SELECT_OPTIONS.QUESTION_CATEGORY.PROTECT_FROM_ATTACKS' }]}
              />
            </FieldContainer>
            <FieldContainer>
              <PrimaryField
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.YOUR_QUESTION"
                placeholderTid="LAWYER_REQUEST.FORM.FIELDS.PLACEHOLDERS.YOUR_QUESTION"
                name={fieldYourQuestion}
                value={values[fieldYourQuestion]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <FieldContainer hasIcon>
              <TextareaField
                titleTid="LAWYER_REQUEST.FORM.FIELDS.TITLES.PROBLEM_DESCRIPTION"
                placeholderTid="LAWYER_REQUEST.FORM.FIELDS.PLACEHOLDERS.PROBLEM_DESCRIPTION"
                name={fieldProblemDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                row={8}
              />
              <FileIcon />
            </FieldContainer>

            <PriceOfResolvingIssueContainer>
              <PriceOfResolvingIssueText tid="LAWYER_REQUEST.FORM.PRICE_OF_RESOLVING_ISSUE" />
              <div>
                <PriceText>500</PriceText>
                <ValuteText tid="SIDEBAR.ACCOUNT_INFO_CURRENCY" />
              </div>
            </PriceOfResolvingIssueContainer>

            <ButtonFields>
              <PrimaryButton tid="LAWYER_REQUEST.FORM.FIELDS.BUTTONS.SEND_AND_PAY" />
              <SecondaryButton tid="LAWYER_REQUEST.FORM.FIELDS.BUTTONS.WATCH_MY_QUESTIONS" type="button" />
            </ButtonFields>
          </form>
        </SectionLayout>
      </IndentLayout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin-top: ${spacing(6)};
`;

const FieldContainer = styled.div`
  margin-top: ${spacing(6)};
  ${(props) => props.hasIcon && `position: relative`};
`;

const FileIcon = styled(File)`
  position: absolute;
  right: 16px;
  top: 40px;
`;

const PriceOfResolvingIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing(5)} 0;
`;

const PriceOfResolvingIssueText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  margin-bottom: ${spacing(2)};
`;

const PriceText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const ButtonFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${spacing(4)};
`;

