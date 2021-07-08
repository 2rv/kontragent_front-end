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
            <PrimaryTitleText tid="Новый запрос юристу" />

            <FieldContainer>
              <SelectField
                titleTid="Выбирете категорию вопроса"
                name={fieldQuestionCategory}
                onChange={handleChange}
                onBlur={handleBlur}
                option={[{ id: 1, tid: 'Как защитить себя от атак' }]}
              />
            </FieldContainer>
            <FieldContainer>
              <PrimaryField
                titleTid="Вкратце опишите свой вопрос"
                placeholderTid="Опишите проблему уловжившись в 1-2 предложения"
                name={fieldYourQuestion}
                value={values[fieldYourQuestion]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <FieldContainer hasIcon>
              <TextareaField
                titleTid="Детально опишите проблему"
                placeholderTid="Опишите проблему в полном объёме"
                name={fieldProblemDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                row={8}
              />
              <FileIcon />
            </FieldContainer>

            <PriceOfResolvingIssueContainer>
              <PriceOfResolvingIssueText tid="Цена решения вопроса" />
              <div>
                <PriceText>500</PriceText>&nbsp;
                <ValuteText tid="руб" />.
              </div>
            </PriceOfResolvingIssueContainer>

            <ButtonFields>
              <PrimaryButton tid="Отправить и оплатить" />
              <SecondaryButton tid="Смотреть мои вопросы" type="button" />
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

