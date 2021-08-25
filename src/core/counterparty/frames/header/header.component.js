import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';

import { SecondaryText, PrimaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent(props) {
  const { title, companyType, companyName, titleColor } = props;

  return (
    <SectionLayout type="MEDIUM">
      <Title tid={title} color={titleColor} />
      <CompanyName>
        <Text tid="Ваше" />
        &nbsp;
        <Text tid={companyType} />
        &nbsp;
        {companyName}&nbsp;
        <Text tid="находится в красной зоне. Вы можете исправить это по советам ниже" />
      </CompanyName>
    </SectionLayout>
  );
}
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  ${(props) => props.color && `color: ${props.color}`};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
