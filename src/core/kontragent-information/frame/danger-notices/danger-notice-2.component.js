import styled from 'styled-components';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SecondaryButton } from '../../../../lib/elements/button';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function DangerNotice2Component({ dangerNotices2 }) {
  return (
    <Box>
      <Layout>
        <DangerNoticeHeadline tid="Уведомления об опасности" />
        <DangerNoticeContainer>
          {dangerNotices2.map((dangerNotice) => (
            <DangerNoticeContent
              key={dangerNotice.id}
              hasShadow={dangerNotice.hasShadow}
              hasBlueBorder={dangerNotice.hasBlueBorder}
              hasGrayBackground={dangerNotice.hasGrayBackground}
            >
              <DangerNoticeTitle tid={dangerNotice.title} />
              <DangerNoticeDescription tid={dangerNotice.description} />
              <div>
                <DangerNoticePrice tid={dangerNotice.price} />&nbsp;
                <LightGrayText tid="руб" />.
              </div>
            </DangerNoticeContent>
          ))}
        </DangerNoticeContainer>
        <Divider />
        <FooterContainer>
          <div>
            <LightGrayText tid="Цена решения вопроса" />
            <div>
              <BlueText>3 500&nbsp;</BlueText>
              <PrimaryText tid="руб" />.
            </div>
          </div>
          <SecondaryButton tid="Заказать" />
        </FooterContainer>
      </Layout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin: ${spacing(7)} 0;
`;

const Layout = styled(IndentLayout)`
  padding-right: ${spacing(4)};
`;

const DangerNoticeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DangerNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: ${spacing(4)};
  margin-right: ${spacing(4)};
  margin-top: ${spacing(4)};
  ${(props) => props.hasShadow && `box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);`};
  ${(props) => props.hasBlueBorder && `border: 2px solid #3AB8FF;`};
  ${(props) => props.hasGrayBackground && `background: #F3F3F3;`};
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DangerNoticeHeadline = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const DangerNoticeTitle = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 21px;
`;

const DangerNoticeDescription = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  margin: ${spacing(4)} 0;
  line-height: 21px;
`;

const DangerNoticePrice = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  margin-top: ${spacing(4)};
  line-height: 21px;
`;

const LightGrayText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const BlueText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.COLOR.ACCENT};
  line-height: 32px;
`;

const Divider = styled(PrimaryDivider)`
  margin: ${spacing(6)} 0;
`;
