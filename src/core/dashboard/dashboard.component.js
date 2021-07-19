import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { AdvertContainer } from '../advert';
import { NewsAndBlogComponent, ControlBlockComponent } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function DashboardComponent(props) {
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <Background />
        <Content>
          <AdvertContainer type="BAR" />
          <NewsAndBlogComponent />
          <ControlBlockComponent />
        </Content>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
  overflow: auto;
  padding-right: ${spacing(6)};
`;
const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 830px;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
