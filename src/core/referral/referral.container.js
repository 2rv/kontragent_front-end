import { ReferralComponent } from './referral.component';

export function ReferralContainer() {
  return <ReferralComponent referralItems={referralItems} />;
}
const referralItems = [
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
