import { Formik } from 'formik';
import { WaysResolveFormComponent } from './ways-resolve-form.component';

export function WaysResolveFormContainer(props) {
  const { waysResolveData } = props;

  const getInitialValue = () => {
    return waysResolveData.reduce((acc, item) => {
      acc[item.name] = false;
      return acc;
    }, {});
  };

  return (
    <Formik initialValues={getInitialValue()}>
      {(formProps) => (
        <WaysResolveFormComponent {...formProps} data={waysResolveData} />
      )}
    </Formik>
  );
}
