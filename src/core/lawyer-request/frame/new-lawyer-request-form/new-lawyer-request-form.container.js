import { Formik } from 'formik';

import { NewLawyerRequestFormComponent } from './new-lawyer-request-form.component';

import { NEW_LAWYER_REQUEST_FORM_FIELD_KEY } from './new-lawyer-request-form.type';

export function NewLawyerRequestFormContainer(props) {
  const {
    initialValue,
    onSubmit,
    fieldName,
    validation,
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  const QUESTION_CATEGORY_NAME =
    fieldName[NEW_LAWYER_REQUEST_FORM_FIELD_KEY.QUESTION_CATEGORY];
  const YOUR_QUESTION_NAME =
    fieldName[NEW_LAWYER_REQUEST_FORM_FIELD_KEY.YOUR_QUESTION];
  const PROBLEM_DESCRIPTION_NAME =
    fieldName[NEW_LAWYER_REQUEST_FORM_FIELD_KEY.PROBLEM_DESCRIPTION];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmit}
    >
      {(formProps) => (
        <NewLawyerRequestFormComponent
          fieldQuestionCategory={QUESTION_CATEGORY_NAME}
          fieldYourQuestion={YOUR_QUESTION_NAME}
          fieldProblemDescription={PROBLEM_DESCRIPTION_NAME}
          {...formProps}
          {...props}
        />
      )}
    </Formik>
  );
}
