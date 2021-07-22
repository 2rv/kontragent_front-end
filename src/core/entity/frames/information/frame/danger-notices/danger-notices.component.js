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

export function DangerNoticesComponent({ dangerNotices }) {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <DangerNoticeHeadline tid="ENTITY.DETAIL_INFORMATION.DANGER_NOTICE_TITLE" />
          <DangerNoticeContainer>
            {dangerNotices.map((notice, index) => (
              <DangerNoticeContent key={index}>
                <DangerNoticeTitle tid={notice.title} />
                <DangerNoticeDescription tid={notice.description} />
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
  gap: ${spacing(8)};
`;

const DangerNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${THEME_COLOR.TEXT.WARNING};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: fit-content;
  gap: ${spacing(4)};
  padding: ${spacing(4)};
`;

const DangerNoticeHeadline = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const DangerNoticeTitle = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.WARNING};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;

const DangerNoticeDescription = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  line-height: 1.5;
`;
