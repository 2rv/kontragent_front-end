import styled from 'styled-components';
import { FieldSkeleton } from './field.skeleton';

export function AvatarSkeleton() {
  return <Skeleton />;
}

const Skeleton = styled(FieldSkeleton)`
  width: 56px;
  height: 56px; ;
`;
