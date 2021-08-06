import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SectionLayout } from '../../../../lib/elements/layout';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option.svg';
import { PrimaryLink } from '../../../../lib/elements/link';
import { CardBody } from '../card-body';

export function QuantitativeStatsCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.QUANTITATIVE_STATS" />}
      action={<OptionIcon />}
      content={
        <>
          <DiagramCase>
            <Diagram />
          </DiagramCase>
          <SectionLayout type="SMALL">
            <TextCase>
              <TinyPrimaryText tid="250" />
              &nbsp;
              <TinySecondaryText tid="DASHBOARD_CARD.NEW_CONTERPARTIES_DAY" />
            </TextCase>
            <Link tid="DASHBOARD_CARD.LEARN_MORE" />
          </SectionLayout>
        </>
      }
    />
  );
}

const Link = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Diagram = styled.div`
  height: 72px;
  width: 72px;
  border: 10px solid ${THEME_COLOR.COLOR.ACCENT};
  border-radius: 100%;
`;
const DiagramCase = styled.div`
  height: 72px;
  width: 72px;
`;
const TextCase = styled.span`
  line-height: 1.5;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const TinyPrimaryText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const TinySecondaryText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
