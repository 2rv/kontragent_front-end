import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import {
  IndentLayout,
  SectionLayout,
} from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function DangerNoticeComponent(props) {
  const { dangerNoticeData } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <DangerNoticeHeadline tid="COUNTERPARTY.DETAIL_INFORMATION.DANGER_NOTICE_TITLE" />
          <DangerNoticeContainer>
            {dangerNoticeData.map((dangerNotice) => (
              <DangerNoticeContent key={dangerNotice.id}>
                <DangerNoticeTitle tid={dangerNotice.title} />
                {dangerNotice.description && (
                  <DangerNoticeDescription tid={dangerNotice.description} />
                )}
              </DangerNoticeContent>
            ))}
          </DangerNoticeContainer>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
const DangerNoticeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(4)};
`;

const DangerNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(4)};
  height: fit-content;
  border: 2px solid ${THEME_COLOR.TEXT.WARNING};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const DangerNoticeHeadline = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const DangerNoticeTitle = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.WARNING};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 21px;
`;
const DangerNoticeDescription = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  line-height: 21px;
`;
