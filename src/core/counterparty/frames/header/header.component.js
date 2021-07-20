import styled from 'styled-components';

import { SecondaryText, PrimaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent(props) {
  const { title, companyType, companyName, titleColor } = props;

  return (
    <HeaderContainer>
      <Title tid={title} color={titleColor} />
      <div>
        <Text tid={companyType} />
        &nbsp;
        <CompanyName tid={companyName} />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${spacing(6)};
  gap: ${spacing(3)};
`;

const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  ${(props) => props.color && `color: ${props.color}`};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
