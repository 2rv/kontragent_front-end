import styled from 'styled-components';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import {
  CommentListComponent,
  CommentInputComponent,
  ThemeArbitrationHeaderComponent,
} from './frame';
import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { PrimaryLoader } from '../../lib/elements/loader';

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

  return (
    <>
      {isPending || (pageLoading && <PrimaryLoader />)}
      <Container>
        <ThemeArbitrationHeaderComponent
          description={description}
          status={status}
          theme={theme}
          role={role}
          time={time}
        />
        <Content>
          <ContentHeaderCase>
            <ContentTitle tid="THEME_ARBITRATION.REVIEWS" />
            <LineCase>
              <SecondaryText tid={companyType} />
              <NameCompany tid={`"${companyName}"`} />
            </LineCase>
          </ContentHeaderCase>
          <CommentListComponent
            dataComment={commentItem}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
          />
          <CommentInputComponent myAvatar={myAvatar} />
        </Content>
      </Container>
    </>
  );
}
const ContentTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const NameCompany = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Content = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
  gap: ${spacing(6)};
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const ContentHeaderCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  gap: ${spacing(6)};
`;
