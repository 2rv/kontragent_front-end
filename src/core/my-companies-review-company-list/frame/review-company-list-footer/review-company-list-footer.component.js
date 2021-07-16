import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryButton } from '../../../../lib/elements/button';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { ReactComponent as PlusIcon } from '../../../../asset/svg/plus-icon-gray.svg';

export function ReviewCompanyListFooterComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <PrimaryBox>
      <IndentLayout type="SMALL">
        <Container>
          <IconButton>
            <PlusIcon />
          </IconButton>
          <SectionLayout type="SMALL">
            <Button tid="MY_COMPANIES.MY_COMPANIES_REVIEW_COMPANY_LIST.REVIEW_COMPANY_LIST_FOOTER.TITLE" />
            <SecondaryText tid="MY_COMPANIES.MY_COMPANIES_REVIEW_COMPANY_LIST.REVIEW_COMPANY_LIST_FOOTER.DESCRIPTION" />
          </SectionLayout>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}
const IconButton = styled(PrimaryButton)`
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const Button = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
