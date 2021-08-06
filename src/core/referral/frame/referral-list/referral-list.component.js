import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { BaseList } from '../../../../lib/elements/list';

export function ReferralListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    referralList,
  } = props;
  return (
    <Box>
      <IndentLayout>
        <SectionLayout>
          <PrimaryTitleText tid="REFERRAL.REFERRAL_LIST" />
          <BaseList
            listData={referralList}
            skeletonAction={pageLoading || isPending}
            itemBackground={THEME_COLOR.COLOR.SECONDARY}
          >
            {(props) => {
              const {
                avatar,
                name,
                referralSignedData,
                receivedMonth,
                receivedAllTime,
              } = props;
              const Procent = Math.round(receivedAllTime / receivedMonth);
              return (
                <Container>
                  <Content>
                    <Avatar src={avatar} />
                    <Column>
                      <Username tid={name} />
                      <Line>
                        <ValuteText tid="REFERRAL.YOUR_REFERRAL_FROM" />{' '}
                        <SecondaryText tid={referralSignedData} />
                      </Line>
                    </Column>
                  </Content>
                  <MoneyInfoCase>
                    <EndLine>
                      <SecondaryText>{receivedAllTime}</SecondaryText>
                      <ValuteText tid="REFERRAL.VALUTE" />
                    </EndLine>
                    <EndLine>
                      <RecivedMonth>{receivedMonth}</RecivedMonth>
                      <ValuteText tid="REFERRAL.VALUTE" />{' '}
                      <SecondaryText tid={`(${Procent}%)`} />
                    </EndLine>
                  </MoneyInfoCase>
                </Container>
              );
            }}
          </BaseList>
        </SectionLayout>
      </IndentLayout>
    </Box>
  );
}
const Box = styled(PrimaryBox)`
  min-width: min-content;
`;
const Column = styled.div`
  display: flex;
  gap: ${spacing(2)};
  flex-flow: column;
  min-width: 110px;
`;

const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const EndLine = styled(Line)`
  justify-content: flex-end;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: max-content;
  gap: ${spacing(4)};
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
  flex-shrink: 0;
`;
const MoneyInfoCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${spacing(2)};
  min-width: 90px;
  flex-shrink: 0;
`;
const Username = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const RecivedMonth = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const ValuteText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Avatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
