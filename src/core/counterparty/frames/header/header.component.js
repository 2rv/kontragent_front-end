import styled from 'styled-components';

import { SecondaryText, PrimaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent(props) {
  const {
    title,
    companyType,
    companyName,
    children,
    titleColor,
  } = props;

  return (
    <HeaderContainer>
      <Title tid={title} color={titleColor} />
      <div>
        <SecondaryText tid={companyType} />&nbsp;
        <CompanyName tid={companyName} />
      </div>
      {children ? children : null}
  </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    line-height 20px;
    margin-bottom: ${spacing(3)};
  }
`;

const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  margin-bottom: ${spacing(3)};
  ${(props) => props.color && `color: ${props.color}`};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

