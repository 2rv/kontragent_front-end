import { Formik } from 'formik';
import { Settings2FAFormComponent } from './settings-2fa-form.component';

export function Settings2FAFormContainer(props) {
  const { pageLoading, isPending, isError, isSuccess, errorMessage } = props;
  return (
    <div>
      <Formik
        initialValues={{
          fieldPhoenNumberName: '',
        }}
      >
        {(props) => (
          <Settings2FAFormComponent
            fieldPhoneNumber="fieldPhoenNumberName"
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            {...props}
          />
        )}
      </Formik>
    </div>
  );
}
