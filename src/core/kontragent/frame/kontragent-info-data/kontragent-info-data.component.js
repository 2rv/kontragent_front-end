import React from 'react';
import styled from 'styled-components';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { TextButton } from '../../../../lib/elements/button';

export function KontragentInfoDataComponent(props) {
  const {
    foundation_date,
    phone_numbers,
    capital,
    enforcement_proceedings,
    inn,
    kpp,
    ogrn,
    okpo,
    address,
    ceo,
    founders,
    finance,
  } = props.kontragentInfoDataFrameData.information;
  return (
    <PrimaryBox>
      <IndentLayout type="DEFAULT">
        <ColumnContainer>
          <Column>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FOUNDATION_DATE" />
              <RowContent>{foundation_date}</RowContent>
            </Row>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.PHONE_NUMBERS" />
              <RowContent>{phone_numbers}</RowContent>
            </Row>
            <SectionLayout>
              <Row>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.CAPITAL" />
                <RowContent>{capital.sum}</RowContent>
              </Row>
              <SectionLayout>
                {capital.contributors.map((e, index) => (
                  <SectionLayout type="SMALL" key={index}>
                    <RowContent>{e.name}</RowContent>
                    <RowContent>
                      {e.contribution_currency.concat(
                        ' - ',
                        e.contribution_percentage,
                      )}
                    </RowContent>
                  </SectionLayout>
                ))}
              </SectionLayout>
            </SectionLayout>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.ENFORCEMENT_PROCEEDINGS" />
              <RowContent>{enforcement_proceedings}</RowContent>
            </Row>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.EXTRACT" />
              <RowContent>
                <ExtractButton tid="KONTRAGENT.TAB.INFORMATION.EXTRACT_BUTTON" />
                <RowContent tid="KONTRAGENT.TAB.INFORMATION.EXTRACT_TEXT" />
              </RowContent>
            </Row>
          </Column>

          <Column>
            <Row>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.REGISTRATIONS.INN" />
                {inn}
              </RowContent>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.REGISTRATIONS.KPP" />
                {kpp}
              </RowContent>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.REGISTRATIONS.OGRN" />
                {ogrn}
              </RowContent>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.REGISTRATIONS.OKPO" />
                {okpo}
              </RowContent>
            </Row>
            <Row>
              <RowContent>{address}</RowContent>
            </Row>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.CEO" />
              <RowContent>{ceo}</RowContent>
            </Row>
            <Row>
              <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.INDIVIDUAL_FOUNDERS" />
              <SectionLayout>
                {founders.map((e, index) => (
                  <SectionLayout type="SMALL" key={index}>
                    <RowContent>{e.name}</RowContent>
                    <RowContent>
                      {e.contribution_currency.concat(
                        ' - ',
                        e.contribution_percentage,
                      )}
                    </RowContent>
                  </SectionLayout>
                ))}
              </SectionLayout>
            </Row>
            <Row>
              <SecondaryText>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FINANCE.START" />
                {finance.year}
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FINANCE.END" />
              </SecondaryText>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FINANCE.ACCOUNT_BALANCE" />
                {finance.account_balance}
              </RowContent>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FINANCE.REVENUE" />
                {finance.revenue}
              </RowContent>
              <RowContent>
                <SecondaryText tid="KONTRAGENT.TAB.INFORMATION.FINANCE.NET_PROFIT" />
                {finance.net_profit}
              </RowContent>
            </Row>
          </Column>
        </ColumnContainer>
      </IndentLayout>
    </PrimaryBox>
  );
}

const ExtractButton = styled(TextButton)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${spacing(4)};
`;

const RowContent = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${spacing(1)};
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;
