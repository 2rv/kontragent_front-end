import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ControlBlockComponent } from './frame';
import { IndentLayout } from '../../lib/elements/layout';
import { PrimaryLoader } from '../../lib/elements/loader';

export function DashboardAdminComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <Background />
        <Content>
          <ControlBlockComponent />
        </Content>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
`;
const Content = styled(IndentLayout)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
