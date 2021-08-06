import styled from 'styled-components';
import { ReactComponent as ErrorPageIcon } from '../../asset/svg/error-page.svg';
import { PrimaryLink } from '../../lib/elements/link';
import { SecondaryText, PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';

export function ErrorPageComponent() {
  return (
    <Container>
      <ImageCase>
        <ErrorPageIcon />
      </ImageCase>
      <Title tid="ERROR_PAGE.TITLE" />
      <Description tid="ERROR_PAGE.DESCRIPTION" />
      <LinkHome tid="ERROR_PAGE.TO_HOME" pathname={'/'} />
    </Container>
  );
}
const ImageCase = styled.div`
  height: max-content;
  @media screen and (max-height: 590px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: max-content;
  flex-flow: column;
  gap: ${spacing(3)};
`;
const Title = styled(PrimaryTitleText)`
  font-size: 36px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Description = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  text-align: center;
  line-height: 1.5;
  width: 525px;
`;

const LinkHome = styled(PrimaryLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  width: 226px;
  min-height: 46px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  color: ${THEME_COLOR.TEXT.BASE};
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
