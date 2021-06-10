import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SelectField } from '../../../../lib/elements/field';
import { TextareaField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';
import { spacing } from '../../../../lib/theme';

export function SupportFormCreateRequestComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldProblemCategory,
    fieldProblemOutline,
    fieldProblemDescription,
    problemCategory,
    pageLoading,
    isSuccess,
    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  console.log(`formik values: ${JSON.stringify(values)}`);

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <SectionLayout type="LARGE">
          <SecondaryTitleText tid="SUPPORT.CREATE_REQUEST.HEADER" />
          <FieldLayout>
            <SelectField
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_CATEGORY.TITLE"
              name={fieldProblemCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              option={problemCategory}
            />

            <TextareaField
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_OUTLINE.TITLE"
              placeholderTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_OUTLINE.PLACEHOLDER"
              name={fieldProblemOutline}
              onChange={handleChange}
              onBlur={handleBlur}
              error={isFieldError(fieldProblemOutline)}
              row={1}
            />

            <TextareaField
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_DESCRIPTION.PLACEHOLDER"
              placeholderTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_DESCRIPTION.PLACEHOLDER"
              name={fieldProblemDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              error={isFieldError(fieldProblemDescription)}
              row={6}
            />
          </FieldLayout>
        </SectionLayout>

        <SecondaryButton
          tid="SUPPORT.CREATE_REQUEST.BUTTON"
          disabled={isSubmitDisabled()}
        />

        {(isError || errorMessage) && (
          <CommonError tid={`ERROR.${errorMessage}`} />
        )}
        {isPending && (
          <LoaderLayout>
            <CommonLoader width={17} height={17} />
          </LoaderLayout>
        )}
      </SectionLayout>
    </form>
  );
}

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
