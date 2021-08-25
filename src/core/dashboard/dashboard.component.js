import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { NewsAndBlogComponent, ControlBlockComponent } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';
import { Card } from '../cards';

export function DashboardComponent(props) {
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <div>
          <Card type="advert-bar" />
        </div>
        <NewsAndBlogComponent />
        <ControlBlockComponent />
      </Container>
    </>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  gap: ${spacing(8)};
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
  min-width: fit-content;
  background: linear-gradient(
    0deg,
    ${THEME_COLOR.COLOR.SECONDARY} 30%,
    ${THEME_COLOR.COLOR.ACCENT} 30%
  );
  @media screen and (max-width: 500px) {
    padding: ${spacing(2)};
  }
`;
