import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { THEME_VALUE, THEME_COLOR } from '../../../../lib/theme';

export function SupportRequestListItem(props) {
  const { problemTid, requestCause, requestStatusId, statusTid, date } =
    props.data;
  return (
    <PrimaryBox>
      <IndentLayout type="MEDIUM">
        <Container>
          <SectionLayout type="MEDIUM">
            <PrimaryText tid={problemTid} />
            <SecondaryText>{requestCause}</SecondaryText>
          </SectionLayout>
          <SectionCase type="MEDIUM">
            <StatusText tid={statusTid} statusId={requestStatusId} />
            <SecondaryText>{date}</SecondaryText>
          </SectionCase>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
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

const SectionCase = styled(SectionLayout)`
  text-align: end;
`;
