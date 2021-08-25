import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent(props) {
  const { title, companyType, companyName } = props;

  return (
    <HeaderContainer>
      <Title tid={title} />
      <div>
        <SecondaryText tid={companyType} />
        &nbsp;
        <CompanyName tid={companyName} />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
