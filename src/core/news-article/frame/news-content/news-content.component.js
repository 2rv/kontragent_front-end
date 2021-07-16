import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function NewsContentComponent(props) {
  const { primary, secondary, base, image } = props.newsContent;
  return (
    <SectionLayout type="LARGE">
      <SectionLayout type="SMALL">
        <Paragraph tid={primary[0]} />
        <Text tid={secondary[0]} />
        <Text tid={secondary[1]} />
        <Image src={image[0]} />
      </SectionLayout>
      <SectionLayout type="SMALL">
        <Paragraph tid={primary[1]} />
        <Text tid={secondary[2]} />
      </SectionLayout>
      <SectionLayout type="SMALL">
        <Paragraph tid={primary[2]} />
        <Text tid={secondary[3]} />
        <Base tid={base[0]} />
        <Image src={image[1]} />
      </SectionLayout>
    </SectionLayout>
  );
}
const Paragraph = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Text = styled(SecondaryText)`
  line-height: 1.5;
`;
const Base = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  line-height: 1.5;
`;
const Image = styled.img`
  width: 100%;
  height: 288px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
