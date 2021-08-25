import styled from 'styled-components';
import { FieldSkeleton } from './field.skeleton';

export function CardSkeleton() {
  return <Skeleton />;
}

const Skeleton = styled(FieldSkeleton)`
  height: 80px;
`;
