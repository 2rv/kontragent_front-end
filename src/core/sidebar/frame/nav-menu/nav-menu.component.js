import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryLink } from '../../../../lib/elements/link';

export function NavMenuComponent(props) {
  const { navmenuItems, activePath } = props;
  return (
    <Container type="MEDIUM">
      {navmenuItems.map((item, index) => (
        <NavMenuLink
          key={index}
          tid={item.tid}
          isActive={item.pathname === activePath}
          pathname={item.path}
          config={item.config}
        />
      ))}
    </Container>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
const NavMenuLink = styled(PrimaryLink)`
  color: ${(props) =>
    props.isActive ? THEME_COLOR.TEXT.PRIMARY : THEME_COLOR.TEXT.SECONDARY};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${(props) =>
    props.isActive
      ? THEME_VALUE.FONT_WEIGHT.SEMY_BOLD
      : THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
