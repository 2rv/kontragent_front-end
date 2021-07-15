import { ReferralComponent } from './referral.component';
import { useEffect } from 'react';
import { referralListLoad } from './referral.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { REFERRAL_STORE_NAME } from './referral.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function ReferralContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[REFERRAL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(referralListLoad());
  //   }, []);

  return (
    <ReferralComponent
      isPending={isRequestPending(state.referralList)}
      isError={isRequestError(state.referralList)}
      isSuccess={isRequestSuccess(state.referralList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.referralList)}
      referralList={referralList}
    />
  );
}
const referralList = [
  {
    avatar:
      'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    name: 'Иван Иванов',
    referralSignedData: '25.01.2018',
    receivedMonth: 5500,
    receivedAllTime: 55000,
  },
  {
    avatar:
      'https://www.meme-arsenal.com/memes/06f4c4656ff95ee823b4f1eb2ca354a1.jpg',
    name: 'Иван Иванов',
    referralSignedData: '25.01.2018',
    receivedMonth: 120,
    receivedAllTime: 1200,
  },
  {
    avatar: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
    name: 'Иван Иванов',
    referralSignedData: '25.01.2018',
    receivedMonth: 660,
    receivedAllTime: 6600,
  },
];
