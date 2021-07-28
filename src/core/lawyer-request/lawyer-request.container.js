import { useEffect } from 'react';
import { lawyerRequestLoad } from './lawyer-request.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { LAWYER_REQUEST_STORE_NAME } from './lawyer-request.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LawyerReqeustComponent } from './lawyer-request.component';
import { newLawyerRequestFormValidation } from './lawyer-request.validation';
import {
  NEW_LAWYER_REQUEST_FIELD_NAME,
  NEW_LAWYER_REQUEST_FORM_FIELD_NAME,
} from './lawyer-request.type';

export function LawyerReqeustContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[LAWYER_REQUEST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // useEffect(() => {
  //   dispatch(lawyerRequestLoad());
  // }, []);

  const newLawyerReqeuestFormSendData = (values) => {
    console.log('Values', values);
  };

  const newLawyerRequestFormGetInitialValue = () => ({
    [NEW_LAWYER_REQUEST_FIELD_NAME.QUESTION_CATEGORY]: '',
    [NEW_LAWYER_REQUEST_FIELD_NAME.YOUR_QUESTION]: '',
    [NEW_LAWYER_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
  });

  return (
    <LawyerReqeustComponent
      validation={newLawyerRequestFormValidation}
      isPending={isRequestPending(state.lawyerRequest)}
      isError={isRequestError(state.lawyerRequest)}
      isSuccess={isRequestSuccess(state.lawyerRequest)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.lawyerRequest)}
      initialValue={newLawyerRequestFormGetInitialValue()}
      onSubmit={newLawyerReqeuestFormSendData}
      fieldName={NEW_LAWYER_REQUEST_FORM_FIELD_NAME}
    />
  );
}
