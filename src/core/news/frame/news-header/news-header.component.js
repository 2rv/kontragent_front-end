import styled from 'styled-components';
import {
  PrimaryTitleText,
  PrimaryText,
  SecondaryText,
} from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';
import { CircleDivider } from '../../../../lib/elements/divider';

export function NewsHeader(props) {
  const { newsTitle, newsDescription, newsTime, newsAuthor } = props;
  return (
    <SectionLayout type="MEDIUM">
      <Title tid={newsTitle} />
      <DescriptionCase>
        <SecondaryText tid={newsDescription} />
        <CircleDivider />
        <Time tid={newsTime} />
        <CircleDivider />
        <Author tid={newsAuthor} />
      </DescriptionCase>
    </SectionLayout>
  );
}

const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Author = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const DescriptionCase = styled.div`
  align-items: center;
  display: flex;
  gap: ${spacing(2)};
`;