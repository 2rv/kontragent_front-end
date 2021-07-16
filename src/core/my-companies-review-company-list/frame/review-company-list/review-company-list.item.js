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
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';

export function ReviewCompanyListItem(props) {
  const { companyName, role, date } = props.data;
  return (
    <ReviewCompanyListItemContainer>
      {
        <PrimaryBox>
          <IndentLayout type="MEDIUM">
            <Container>
              <SectionLayout type="SMALL">
                <CompanyName>{companyName}</CompanyName>
                <Content>
                  <Role>{role}</Role>
                  <CircleDivider />
                  <Time>{date}</Time>
                </Content>
              </SectionLayout>
              <IconContainer>
                <OptionIcon />
              </IconContainer>
            </Container>
          </IndentLayout>
        </PrimaryBox>
      }
    </ReviewCompanyListItemContainer>
  );
}
const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Role = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
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
