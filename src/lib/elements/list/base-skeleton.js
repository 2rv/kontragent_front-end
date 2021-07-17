import styled, { keyframes } from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme';
import { SectionLayout } from '../layout';
const delay = () => Math.random() * 3;
export function ListSkeleton() {
  return (
    <SectionLayout>
      {[0, 1, 2, 3, 4].map((item) => (
        <Skeleton>
          <AnimateBlock key={item} delay={delay()} />
        </Skeleton>
      ))}
    </SectionLayout>
  );
}
const Skeleton = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const animation = keyframes`
    0% {
		right: 0%;
  }
  50% {
    right: calc(100% - 150px);
  }
  100% {
    right: 0%;
  }
`;
const AnimateBlock = styled.div`
  position: absolute;
  right: 0;
  height: 70px;
  width: 100px;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e8e8e8 50%,
    transparent 100%
  );
  animation: ${animation} 4s infinite;
  animation-delay: ${({ delay = 0 }) => delay + 's'};
`;
