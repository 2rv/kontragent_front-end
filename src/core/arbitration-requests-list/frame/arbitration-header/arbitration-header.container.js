import { ArbitrationHeaderComponent } from './arbitration-header.component';

export function ArbitrationHeaderContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    arbitrationListSelectOption,
  } = props;
  return (
    <ArbitrationHeaderComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      arbitrationListSelectOption={arbitrationListSelectOption}
    />
  );
}
