import { MyLegalEntitesHeaderComponent } from './my-legal-entites-header.component';

export function MyLegalEntitesHeaderContainer(props) {
  const {
    myLegalEntitiesSelectOption,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <MyLegalEntitesHeaderComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      myLegalEntitiesSelectOption={myLegalEntitiesSelectOption}
    />
  );
}
