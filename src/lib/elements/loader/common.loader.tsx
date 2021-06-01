import styled from 'styled-components';
import Image from 'next/image';

import { LoaderPropsType } from './type.loader';

export function CommonLoader(props: LoaderPropsType) {
  const { width, height } = props;

  return (
    <FormLoaderContainer width={width} height={height}>
      <Image src="/static/img/testloader.gif" layout="fill" />
    </FormLoaderContainer>
  );
}

const FormLoaderContainer = styled.div`
  position: relative;
  width: ${(p: LoaderPropsType) => p.width}px;
  height: ${(p: LoaderPropsType) => p.height}px;
`;
