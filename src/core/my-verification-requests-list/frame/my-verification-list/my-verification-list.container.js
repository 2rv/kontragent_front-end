import { MyVerificationListComponent } from './my-verification-list.component';

export function MyVerificationListContainer(props) {
  const { myVerificationListData } = props;
  return (
    <MyVerificationListComponent
      myVerificationListData={myVerificationListData}
    />
  );
}
