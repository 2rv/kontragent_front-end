import styled from 'styled-components';
import Image from 'next/image';

export function CommonLoader(props) {
  const {width, height} = props;
  const FormLoaderContainer = styled.div`
    position: relative;
    width: ${width}px;
    height: ${height}px;
  `;

  return (
    <FormLoaderContainer>
      <Image src="/static/img/testloader.gif" layout='fill' />
    </FormLoaderContainer>
  );
}