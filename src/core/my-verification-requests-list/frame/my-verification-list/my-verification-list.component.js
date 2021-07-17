import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';
import { MyVerificationListItemComponent } from './my-verification-list-item.component';

export function MyVerificationListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myVerificationListData,
  } = props;
  return (
    <SectionLayout>
      {myVerificationListData.map((data, index) => (
        <MyVerificationListItemComponent key={index} data={data} />
      ))}
    </SectionLayout>
  );
}
