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
        <Content>
          <AdvertContainer type="BAR" />
          <NewsAndBlogComponent />
          <ControlBlockComponent />
        </Content>
      </Container>
    </>
  );
}
const Content = styled.div`
  padding-right: ${spacing(6)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  gap: ${spacing(8)};
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  background: linear-gradient(
    0deg,
    ${THEME_COLOR.COLOR.SECONDARY} 30%,
    ${THEME_COLOR.COLOR.ACCENT} 30%
  );
`;
