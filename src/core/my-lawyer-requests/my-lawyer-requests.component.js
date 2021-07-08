import styled from 'styled-components';

import { SearchRequestsComponent } from './frame/search-request';
import { RequestsListComponent } from './frame/requests-list';

import { REQUESTS_LIST } from './my-lawyer-requests.constant';

import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function MyLawyerReqeustsComponent() {
  return (
    <div>
      <MyLawyerRequestsTitle tid="Мои запросы юристам" />
      <SearchRequestsComponent />
      <RequestsListComponent requestsList={REQUESTS_LIST} />
    </div>
  );
}

const MyLawyerRequestsTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-bottom: ${spacing(3)};
`;
