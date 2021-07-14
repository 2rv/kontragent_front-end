import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { CircleDivider } from '../../../../lib/elements/divider';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME } from '../../my-companies-review-company-list.constant';
import { ReactComponent as OptionsIcon } from '../../../../asset/svg/options.svg';
export function ReviewCompanyListItem(props) {
  return (
    <ReviewCompanyListItemContainer>
      {
        <PrimaryBox>
          <IndentLayout type="MEDIUM">
            <Container>
              <SectionLayout type="SMALL">
                <PrimaryText>ООО "КАПСТРОЙЭНЕРГОТЕХ"</PrimaryText>
                <Content>
                  <Role>Менеджер</Role>
                  <CircleDivider />
                  <SecondaryText>с 06.08.2020</SecondaryText>
                </Content>
              </SectionLayout>
              <IconContainer>
                <OptionsIcon />
              </IconContainer>
            </Container>
          </IndentLayout>
        </PrimaryBox>
      }
    </ReviewCompanyListItemContainer>
  );
}

const ReviewCompanyListItemContainer = styled.div`
  border: 1px solid transparent;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  &:hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT};
`;

const Content = styled.div`
  display: flex;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: ${spacing(2)};
  align-items: center;
`;

const Role = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  margin-right: ${spacing(4)};
  cursor: pointer;
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;
