import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryLink } from '../../../../lib/elements/link';

export function NavMenuComponent(props) {
  const { navmenuItems, activePath } = props;
  return (
    <SectionLayout type="MEDIUM">
      {navmenuItems.map((item, index) => (
        <span>
          <NavMenuLink
            key={index}
            tid={item.tid}
            isActive={item.pathname === activePath}
            pathname={item.path}
            config={item.config}
          />
        </span>
      ))}
    </SectionLayout>
  );
}

const NavMenuLink = styled(PrimaryLink)`
  color: ${(props) =>
    props.isActive ? THEME_COLOR.TEXT.PRIMARY : THEME_COLOR.TEXT.SECONDARY};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${(props) =>
    props.isActive
      ? THEME_VALUE.FONT_WEIGHT.SEMY_BOLD
      : THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
