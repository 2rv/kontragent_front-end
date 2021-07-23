import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { BaseListItem } from './base-list.item';
import { SectionLayout } from '../layout';
import { ListSkeleton } from './base-skeleton';

export function BaseList(props) {
  const {
    children,
    listData,
    skeletonAction = null,
    itemBackground = null,
  } = props;

  return (
    <List>
      {skeletonAction || true ? (
        <ListSkeleton />
      ) : (
        listData.map((data, index) => (
          <BaseListItem key={index} data={data} itemBackground={itemBackground}>
            {children}
          </BaseListItem>
        ))
      )}
    </List>
  );
}
const List = styled(SectionLayout)`
  height: fit-content;
  min-width: fit-content;
  min-height: 0;
  overflow: 'auto';
  display: flex;
  flex-flow: column;
`;
