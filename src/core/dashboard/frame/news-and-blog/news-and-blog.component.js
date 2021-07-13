import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { AdvertContainer } from '../../../advert';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

export function NewsAndBlogComponent() {
  return (
    <Container>
      <TitleCase>
        <Title tid="DASHBOARD.NEWS_AND_BLOG_TITLE" />
        <ViewAll tid="DASHBOARD.VIEW_ALL" />
      </TitleCase>
      <Content>
        <NewsCard>
          <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
          <CardInfo>
            <CardTitle tid="Новая система проверки контрагентов!" />
            <CardText>
              Задача организации, в особенности же консультация с широким
              активом играет важную роль в формировании систем массового
              участия. <CardLink tid="Читать далее " />
            </CardText>
          </CardInfo>
        </NewsCard>
        <NewsCard>
          <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
          <CardInfo>
            <CardTitle tid="Новая система проверки контрагентов!" />
            <CardText>
              Задача организации, в особенности же консультация с широким
              активом играет важную роль в формировании систем массового
              участия. <CardLink tid="Читать далее " />
            </CardText>
          </CardInfo>
        </NewsCard>
      </Content>
    </Container>
  );
}
const CardText = styled(SecondaryText)`
  font-size: 14px;
  line-height: 21px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const CardLink = styled(PrimaryLink)`
  font-size: 14px;
  line-height: 21px;
`;
const NewsCard = styled.div`
  display: flex;
  height: 222px;
  width: 100%;
  background-color: #fff;
  padding: ${spacing(4)};
  gap: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const CardImage = styled.img`
  width: 186px;
  height: 186px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const CardTitle = styled(PrimaryTitleText)`
  font-size: 20px;
  line-height: 30px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const TitleCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const ViewAll = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.BASE};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.BASE};
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing(8)};
`;

const Container = styled.div`
  position: relative;
  display: grid;
  gap: ${spacing(6)};
`;
