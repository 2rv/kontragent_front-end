import styled from 'styled-components';
import { LawyerRequestListItemComponent } from './lawyer-request-list-item.component';
import { spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function LawyerRequestListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myLawyerRequestListData,
  } = props;
  return (
    <SectionLayout>
      {myLawyerRequestListData.map((data, index) => (
        <LawyerRequestListItemComponent data={data} key={index} />
      ))}
    </SectionLayout>
  );
}
