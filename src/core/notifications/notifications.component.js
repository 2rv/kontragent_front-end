import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { NotificationsListContainer } from './frame';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function NotificationsComponent(props) {
  const { notificationsData, selectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="Лента и уведомления"
        selectOption={selectOption}
        placeholderTid="Найти юрлицо"
      />
      <NotificationsListContainer notificationsData={notificationsData} />
    </Container>
  );
}
const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
