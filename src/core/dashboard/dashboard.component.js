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
      <Background />
      <Content>
        <AdvertContainer type="BAR" />
        <NewsAndBlogComponent />
        <ControlBlockComponent />
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 830px;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
