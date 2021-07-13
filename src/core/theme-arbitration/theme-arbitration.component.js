import styled from 'styled-components';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { CommentListComponent, CommentInputComponent } from './frame';

export function ThemeArbitrationComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    theme,
    role,
    description,
    time,
    status,
    companyType,
    companyName,
    commentItem,
    myAvatar,
  } = props;
  const { roleColor, roleText } = RoleConverter(role);

  return (
    <Container>
      <HeaderCase>
        <LineCase>
          <Title tid={theme} />
          <Role roleColor={roleColor} tid={roleText} />
        </LineCase>
        <LineCase>
          <Description tid={description} />
          <Time tid={`· ${time} ·`} />
          <Status tid={status} />
        </LineCase>
      </HeaderCase>
      <ContentCase>
        <HeaderCase>
          <ContentTitle tid="Отзывы" />
          <LineCase>
            <TypeCompany tid={companyType} />
            <NameCompany tid={`"${companyName}"`} />
          </LineCase>
        </HeaderCase>
        <CommentListComponent
          dataComment={commentItem}
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
        />
        <CommentInputComponent myAvatar={myAvatar} />
      </ContentCase>
    </Container>
  );
}
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Role = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Description = styled(SecondaryText)``;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Status = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const ContentTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const TypeCompany = styled(SecondaryText)``;
const NameCompany = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
  padding: ${spacing(8)};
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(2.5)};
`;
const HeaderCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: ${spacing(6)};
`;
const RoleConverter = (role) => {
  switch (role) {
    case 1:
      return { roleColor: THEME_COLOR.TEXT.ACCENT, roleText: 'Контрагент' };

    case 2:
      return { roleColor: THEME_COLOR.TEXT.PURPLE, roleText: 'Админ' };

    default:
      return { roleColor: null, roleText: null };
  }
};
