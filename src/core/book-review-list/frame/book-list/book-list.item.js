import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { ReactComponent as DeleteBookIcon } from '../../../../asset/svg/deletebook.svg';
import { ReactComponent as LoadBookIcon } from '../../../../asset/svg/loadbook.svg';

export function BookListItem(props) {
  const { loadDate, bookPeriod, companyName, bookType, kontragentNumber } =
    props.data;
  return (
    <Container>
      <PrimaryBox>
        <Indent>
          <InspectionRequestListItemContainer>
            <LoadDate>{loadDate}</LoadDate>
            <PrimaryText>{bookPeriod}</PrimaryText>
            <PrimaryText>{companyName}</PrimaryText>
            <Text>{bookType}</Text>
            <PrimaryText>{kontragentNumber}</PrimaryText>
            <BookItemButtonLayout>
              <DeleteBookIcon />
              <LoadBookIcon />
            </BookItemButtonLayout>
          </InspectionRequestListItemContainer>
        </Indent>
      </PrimaryBox>
    </Container>
  );
}

const BookItemButtonLayout = styled.div`
  display: flex;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-end;
  gap: ${spacing(3)};
  padding-right: ${spacing(4)};
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;

const Indent = styled.div`
  padding: ${spacing(6)} 0;
`;

const InspectionRequestListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 200px 300px 130px auto auto;
  gap: ${spacing(4)};
  align-items: center;
`;

const Container = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: 1px solid transparent;
  :hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT} ease;
`;

const LoadDate = styled(Text)`
  padding-left: ${spacing(4)};
`;
