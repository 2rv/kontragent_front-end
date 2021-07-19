import styled from 'styled-components';
import Image from 'next/image';

import { ReactComponent as SidebarLogo } from '../../../../asset/svg/sidebarLogo.svg';

export function LogotypeComponent() {
  return (
    <LogotypeComponentImageContainer>
      <SidebarLogo />
    </LogotypeComponentImageContainer>
  );
}

const LogotypeComponentImageContainer = styled.div`
  display: flex;
`;
