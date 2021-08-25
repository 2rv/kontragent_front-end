import { LegalEntitiesListComponent } from './legal-entities-list.component';

export function LegalEntitiesListContainer(props) {
  const {
    myLegalEntitiesListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <LegalEntitiesListComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      myLegalEntitiesListData={myLegalEntitiesListData}
    />
  );
}
