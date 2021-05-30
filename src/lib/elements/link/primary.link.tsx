import styled from 'styled-components';
import { setLinkRedirect } from '../../../main/navigation';

import { PrimaryLinkPropsType } from './type.link';

import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

export function PrimaryLink(props: PrimaryLinkPropsType) {
  const { tid, tvalue, pathname, config } = props;
  return (
    <Link onClick={setLinkRedirect(pathname, config)}>{text(tid, tvalue)}</Link>
  );
}

const Link = styled.a`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.PRIMARY};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
