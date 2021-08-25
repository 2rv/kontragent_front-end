import styled from 'styled-components';
import { FieldSkeleton } from './field.skeleton';

export function TextSkeleton() {
  return <Skeleton />;
}

const Skeleton = styled(FieldSkeleton)`
  height: 16px;
`;
