import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { BaseListItem } from './base-list.item';
import { SectionLayout } from '../layout';
import { ListSkeleton } from './base-skeleton';
export function BaseList(props) {
  const { children, listData, skeletonAction = true } = props;

  return (
    <SectionLayout>
      {skeletonAction ? (
        <ListSkeleton />
      ) : (
        listData.map((data, index) => (
          <BaseListItem key={index} data={data}>
            {children}
          </BaseListItem>
        ))
      )}
    </SectionLayout>
  );
}
