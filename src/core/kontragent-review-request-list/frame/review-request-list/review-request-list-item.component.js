import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';

import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

import { ReactComponent as Bullet } from '../../../../asset/svg/oneLineListBullet.svg';

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
              <Bullet />
              <SecondaryText>{date}</SecondaryText>
              <Bullet />
              <StatusText statusId={id}>{status}</StatusText>
            </RequestListItemDataContainer>
          </SectionLayout>
          <Button tid="KONTRAGENT_REVIEW_REQUEST_LIST.REVIEW_REQUEST_LIST.BUTTON" />
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 500px;
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
