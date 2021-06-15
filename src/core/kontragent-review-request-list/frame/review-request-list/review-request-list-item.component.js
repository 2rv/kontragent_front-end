import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';

import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

import { CicleDivider } from '../../../../lib/elements/divider';

export function ReviewRequestListItemComponent(props) {
  const { id, name, price, date, status } = props.data;
  return (
    <PrimaryBox>
      <IndentLayout type="MEDIUM">
        <Container>
          <SectionLayout type="SMALL">
            <CompanyNameText>{name}</CompanyNameText>
            <RequestListItemDataContainer>
              <PriceText>{price}</PriceText>
              <CicleDivider />
              <SecondaryText>{date}</SecondaryText>
              <CicleDivider />
              <StatusText statusId={id}>{status}</StatusText>
            </RequestListItemDataContainer>
          </SectionLayout>
          <Button tid="KONTRAGENT_REVIEW.REQUEST_LIST.BUTTON" />
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CompanyNameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const RequestListItemDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: ${spacing(2)};
  align-items: center;
`;

const Button = styled(PrimaryButton)`
  width: 161px;
`;

const PriceText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const StatusText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) =>
    props.statusId === 0
      ? THEME_COLOR.TEXT.SUCCESS
      : props.statusId === 1
      ? THEME_COLOR.TEXT.ACCENT
      : THEME_COLOR.TEXT.WARNING};
`;
