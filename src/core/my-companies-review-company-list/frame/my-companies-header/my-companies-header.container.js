import { MyCompaniesHeaderComponent } from './my-companies-header.component';

export function MyCompaniesHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCompaniesSelectOption,
  } = props;
  return (
    <MyCompaniesHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myCompaniesSelectOption={myCompaniesSelectOption}
    />
  );
}
