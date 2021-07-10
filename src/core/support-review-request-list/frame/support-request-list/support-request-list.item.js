import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { THEME_VALUE, THEME_COLOR } from '../../../../lib/theme';

export function SupportRequestListItem(props) {
  const { problemTid, requestCause, requestStatusId, status, date } = props;
  return (
    <PrimaryBox>
      <IndentLayout type="MEDIUM">
        <SupportRequestListItemContainer>
          <SectionLayout type="MEDIUM">
            <PrimaryText tid={problemTid} />
            <SecondaryText>{requestCause}</SecondaryText>
          </SectionLayout>
          <ListItemRightSideContainer type="MEDIUM">
            <StatusText statusId={requestStatusId}>{status}</StatusText>
            <SecondaryText>{date}</SecondaryText>
          </ListItemRightSideContainer>
        </SupportRequestListItemContainer>
      </IndentLayout>
    </PrimaryBox>
  );
}

const SupportRequestListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatusText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) =>
    props.statusId === 0
      ? THEME_COLOR.TEXT.SUCCESS
      : props.statusId === 1
      ? THEME_COLOR.TEXT.WARNING
      : THEME_COLOR.TEXT.ERROR};
`;

const ListItemRightSideContainer = styled(SectionLayout)`
  text-align: end;
`;
