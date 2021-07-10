import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { NotificationsListContainer } from './frame';
import { FilterComponent } from '../../lib/elements/filter-component';

export function FeedAndNotificationsListComponent(props) {
  const { feedAndNotificationsListData, feedAndNotificationsListSelectOption } =
    props;
  return (
    <Container>
      <FilterComponent
        titleTid="Лента и уведомления"
        selectOption={feedAndNotificationsListSelectOption}
        placeholderTid="Найти юрлицо"
      />
      <NotificationsListContainer
        feedAndNotificationsListData={feedAndNotificationsListData}
      />
    </Container>
  );
}
const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
