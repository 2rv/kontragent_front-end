import { ArbitrationListItemComponent } from './arbitration-list-item.component';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ArbitrationListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    arbitrationListData,
  } = props;

  return (
    <SectionLayout>
      {arbitrationListData.map((data, index) => (
        <ArbitrationListItemComponent data={data} key={index} />
      ))}
    </SectionLayout>
  );
}
