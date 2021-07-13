import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import {
  PrimaryTitleText,
  SecondaryText,
  PrimaryText,
} from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryLink } from '../../../../lib/elements/link';
export function CompanyMembersFormComponent() {
  return (
    <Container>
      <Title tid="Добавить сотрудника" />
      <FieldCase>
        <Field placeholderTid="Почта пользователя" />
        <SecondaryButton tid="Пригласить" />
      </FieldCase>
      <TinyText>
        Добавляя пользователя он автоматически становится менеджером, для
        изменения должности читайтев FAQ. <TinyLink tid="Подробнее" />
      </TinyText>
    </Container>
  );
}
const TinyLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const TinyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const Field = styled(PrimaryField)`
  display: grid;
`;
const FieldCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 194px);
  gap: ${spacing(4)};
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding: ${spacing(6)};
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
