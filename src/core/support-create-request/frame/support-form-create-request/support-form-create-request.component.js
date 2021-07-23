import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimarySelect } from '../../../../lib/elements/field';
import { TextareaField, PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import styled from 'styled-components';

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

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <SectionLayout type="LARGE">
          <SecondaryTitleText tid="SUPPORT.CREATE_REQUEST.HEADER" />
          <SectionLayout type="MEDIUM">
            <PrimarySelect
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_CATEGORY.TITLE"
              name={fieldProblemCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              option={problemCategory}
            />

            <PrimaryField
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_OUTLINE.TITLE"
              placeholderTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_OUTLINE.PLACEHOLDER"
              name={fieldProblemOutline}
              onChange={handleChange}
              onBlur={handleBlur}
              error={isFieldError(fieldProblemOutline)}
            />

            <TextareaField
              titleTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_DESCRIPTION.PLACEHOLDER"
              placeholderTid="SUPPORT.CREATE_REQUEST.FIELD.PROBLEM_DESCRIPTION.PLACEHOLDER"
              name={fieldProblemDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              error={isFieldError(fieldProblemDescription)}
              row={6}
              isFile
            />
          </SectionLayout>
        </SectionLayout>

        <SecondaryButton
          tid="SUPPORT.CREATE_REQUEST.BUTTON"
          disabled={isSubmitDisabled()}
        />

        {(isError || errorMessage) && (
          <ErrorAlert tid={`ERROR.${errorMessage}`} />
        )}

        {isSuccess && (
          <SuccessAlert tid={'SUPPORT.CREATE_REQUEST.SUCCESS_MESSAGE'} />
        )}
      </SectionLayout>
    </form>
  );
}
