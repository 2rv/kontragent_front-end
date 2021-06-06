import styled from 'styled-components';
import Image from 'next/image';

export function LogotypeComponent() {
  return (
    <LogotypeComponentImageContainer>
      <Image src="/static/img/testSidebarLogo.svg" layout="fill" />
    </LogotypeComponentImageContainer>
  );
}

const LogotypeComponentImageContainer = styled.div`
  position: relative;
  width: 137px;
  height: 31px;
  display: flex;
  justify-content: flex-start;
`;
