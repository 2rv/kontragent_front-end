import React from 'react';
import styled from 'styled-components';
import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

export function KontragentInfoNotificationsComponent(props) {
  const { warningsLong, warningsShort } =
    props.kontragentInfoNotificationsFrameData;
  return (
    <PrimaryBox>
      <IndentLayout type="DEFAULT">
        <WarningsContainer>
          <Header tid="KONTRAGENT.TAB.INFORMATION.WARNINGS.HEADER" />
          <ColumnContainer>
            <Column>
              {warningsLong.map((e) => (
                <Warning>
                  {e.header && <WarningHeader>{e.header}</WarningHeader>}
                  {e.content && <Content>{e.content}</Content>}
                </Warning>
              ))}
            </Column>
            <Column>
              {warningsShort.map((e) => (
                <Warning>
                  {e.header && <WarningHeader>{e.header}</WarningHeader>}
                </Warning>
              ))}
            </Column>
          </ColumnContainer>
        </WarningsContainer>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${spacing(4)};
`;

const Content = styled(SecondaryText)`
  line-height: 1.5;
`;

const Warning = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${spacing(5)};
  border: 2px solid ${THEME_COLOR.COLOR.WARNING};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
`;

const WarningHeader = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.WARNING};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;

const WarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const Header = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
