import styled from 'styled-components';
import { spacing, THEME_VALUE } from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import { ReactComponent as AddCompanyIcon } from '../../../../asset/svg/addCompany.svg';
export function ReviewCompanyListFooterComponent(props) {
  return (
    <PrimaryBox>
      <IndentLayout type="SMALL">
        <Container>
          <div>
            <AddCompanyIcon />
          </div>
          <ButtonTextContainer>
            <ButtonHeader tid="MY_COMPANIES.MY_COMPANIES_REVIEW_COMPANY_LIST.REVIEW_COMPANY_LIST_FOOTER.TITLE" />
            <SecondaryText tid="MY_COMPANIES.MY_COMPANIES_REVIEW_COMPANY_LIST.REVIEW_COMPANY_LIST_FOOTER.DESCRIPTION" />
          </ButtonTextContainer>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${spacing(3)};
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing(2)};
`;

const ButtonHeader = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
