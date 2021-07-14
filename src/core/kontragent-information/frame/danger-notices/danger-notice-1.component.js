import styled from 'styled-components';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function DangerNotice1Component({ dangerNotices1 }) {
  return (
    <Box>
      <Layout>
        <DangerNoticeHeadline tid="KONTRAGENT_INFORMATION.DANGER_NOTICES.TITLE" />
        <DangerNoticeContainer>
          {dangerNotices1.map((dangerNotice) => (
            <DangerNoticeContent key={dangerNotice.id}>
              <DangerNoticeTitle tid={dangerNotice.title} />
              <DangerNoticeDescription tid={dangerNotice.description} />
            </DangerNoticeContent>
          ))}
        </DangerNoticeContainer>
      </Layout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin: ${spacing(7)} 0;
  width: 70%;
`;

const Layout = styled(IndentLayout)`
  padding-right: ${spacing(4)} !important;
`;

const DangerNoticeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DangerNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${THEME_COLOR.TEXT.WARNING};
  border-radius: 10px;
  height: fit-content;
  padding: ${spacing(4)};
  margin-right: ${spacing(4)};
  margin-top: ${spacing(4)};
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
  margin-top: ${spacing(4)};
  line-height: 21px;
`;