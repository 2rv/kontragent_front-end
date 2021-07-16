import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';
import { SupportRequestListItemComponent } from './support-requests-list-item.component';

export function SupportRequestsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    mySupportRequestsListData,
  } = props;
  return (
    <SectionLayout>
      {mySupportRequestsListData.map((data, index) => (
        <SupportRequestListItemComponent key={index} data={data} />
      ))}
    </SectionLayout>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
