import { THEME_SIZE } from 'src/lib/theme';
import styled, { keyframes } from 'styled-components';
import { SkeletonPropsType } from './type.skeleton';
export function FieldSkeleton(props: SkeletonPropsType) {
  return <Skeleton className={props.className} />;
}

const skeletonAnimation = keyframes`
    0% {
      background-position: -100px;
    }
    40% {
      background-position: 140px;
    }
    100% {
      background-position: 140px;
    }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 46px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;
