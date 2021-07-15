import styled from 'styled-components';

import { SecondaryText, PrimaryText } from '../../../../../../lib/elements/text';
import { SecondaryButton, PrimaryButton } from '../../../../../../lib/elements/button';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <DetailInformationText tid="Детальная информация" />
      <div>
        <SecondaryText tid="Общество с ограниченной ответственностью" />&nbsp;
        <CompanyName>"Компания Гермес-Электро"</CompanyName>
      </div>
      <ButtonsContainer>
        <PrimaryButton tid="Скачать информацию в PDF" />
        <SecondaryButton tid="Консультация по юр. лицу" />
      </ButtonsContainer>
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

const DetailInformationText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  margin-bottom: ${spacing(3)};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${spacing(4)};
  margin-top: ${spacing(6)};
  button {
    width: 320px;
  }
`;
