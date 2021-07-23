import styled from 'styled-components';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function BookHeaderComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListSelectOption,
  } = props;
  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid="BOOK_REVIEW_LIST.HEADER.TITLE" />
        <SecondaryButton tid="BOOK_REVIEW_LIST.HEADER.DOWNLOAD_BOOK" />
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="BOOK_REVIEW_LIST.HEADER.FIND_BOOK" />
        {booksListSelectOption && (
          <SecondarySelect option={booksListSelectOption} />
        )}
      </InputCase>
    </SectionLayout>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const HeaderCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 226px);
  align-items: center;
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 226px);
  gap: ${spacing(4)};
  width: 100%;
`;
