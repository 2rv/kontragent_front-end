import { LawyerReqeustComponent } from './lawyer-request.component';
import { NEW_LAWYER_REQUEST_FIELD_NAME, NEW_LAWYER_REQUEST_FORM_FIELD_NAME } from './lawyer-request.type';

import { DashboardLayout } from '../../lib/common/dashboard';

export function LawyerReqeustContainer() {
  const newLawyerReqeuestFormSendData = (values) => {
    console.log('Values', values);
  };

  const newLawyerRequestFormGetInitialValue = () => ({
    [NEW_LAWYER_REQUEST_FIELD_NAME.QUESTION_CATEGORY]: '',
    [NEW_LAWYER_REQUEST_FIELD_NAME.YOUR_QUESTION]: '',
    [NEW_LAWYER_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
  });

  return (
    <DashboardLayout>
      <LawyerReqeustComponent
        initialValue={newLawyerRequestFormGetInitialValue()}
        onSubmit={newLawyerReqeuestFormSendData}
        fieldName={NEW_LAWYER_REQUEST_FORM_FIELD_NAME}
      />
    </DashboardLayout>
  );
}
