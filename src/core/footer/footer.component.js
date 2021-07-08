import styled from 'styled-components';
import { FOOTER_ITEMS } from './footer.constant';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { PrimaryLink } from '../../lib/elements/link';

export function Footer() {
  return (
    <Container>
      {FOOTER_ITEMS.map(({ text, path }) => (
        <TextLink linkActive={path} tid={text} />
      ))}
    </Container>
  );
}
const TextLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${({ linkActive }) =>
    linkActive ? THEME_VALUE.FONT_WEIGHT.BOLD : THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
  &:hover {
    color: ${THEME_COLOR.TEXT.BASE};
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  padding: ${spacing(8)};
  gap: ${spacing(6)};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
