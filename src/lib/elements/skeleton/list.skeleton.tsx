import { THEME_SIZE } from 'src/lib/theme';
import styled, { keyframes } from 'styled-components';
import { ListSkeletonPropsType } from './type.skeleton';
import { SectionLayout } from '../layout';
export function ListSkeleton(props: ListSkeletonPropsType) {
  return (
    <SectionLayout>
      <Skeleton className={props.className} />
      <Skeleton className={props.className} />
      <Skeleton className={props.className} />
      <Skeleton className={props.className} />
      <Skeleton className={props.className} />
      <Skeleton className={props.className} />
    </SectionLayout>
  );
}

const skeletonAnimation = keyframes`
    0% {
      background-position: 0;
    }

    100% {
      background-position: 1000px;
    }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 80px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 100%;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;
