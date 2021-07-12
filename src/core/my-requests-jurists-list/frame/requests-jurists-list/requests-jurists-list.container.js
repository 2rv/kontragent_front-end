import { RequestsJuristsListComponent } from './requests-jurists-list.component';

export function RequestsJuristsListContainer(props) {
  const { myRequestsJuristsListData } = props;
  return (
    <RequestsJuristsListComponent
      myRequestsJuristsListData={myRequestsJuristsListData}
    />
  );
}
