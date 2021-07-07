import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

export function NewsContentComponent(props) {
  const { primary, secondary, base, image } = props.newsContent;
  return (
    <Container>
      <Primary tid={primary[0]} />
      <Secondary tid={secondary[0]} />
      <Secondary tid={secondary[1]} />
      <Image src={image[0]} />
      <Primary tid={primary[1]} />
      <Secondary tid={secondary[2]} />
      <Primary tid={primary[2]} />
      <Secondary tid={secondary[3]} />
      <Base tid={base[0]} />
      <Image src={image[1]} />
    </Container>
  );
}
const Primary = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Secondary = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Base = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Image = styled.img`
  width: 100%;
  height: 288px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
