import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { Card } from '../../../cards';
import { SecondaryText } from '../../../../lib/elements/text';

export function SidebarAdvertComponent(props) {
  return (
    <Container>
      <Card type="advert-block" />
    </Container>
  );
}
const Container = styled.div`
  padding-right: ${spacing(6)};
  display: flex;
  min-height: 286px;
  min-width: 310px;
  @media screen and (max-height: 720px) {
    display: none;
  }
`;
