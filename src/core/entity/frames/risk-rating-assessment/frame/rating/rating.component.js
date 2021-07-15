import styled from 'styled-components';

import { ReactComponent as Fullstar } from '../../../../../../asset/svg/fullstar.svg';

import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../../../lib/theme';

export function RatingComponent() {
  return (
    <Container>
        <Content>
          <div>
            <SecondaryText tid="Ваша оценка" />
          </div>
          <div>
            <FullstarIcon />
            <FullstarIcon />
            <FullstarIcon />
            <FullstarIcon />
            <FullstarIcon />
          </div>
        </Content>
        <Content>
          <div>
            <SecondaryText tid="Народный рейтинг" />
          </div>
          <div>
            <PrimaryText>3,5</PrimaryText>&nbsp;
            <LightText tid="Баллов" />
          </div>
        </Content>
        <Content>
          <div>
            <SecondaryText tid="Оборот" />
          </div>
          <div>
            <PrimaryText>310 988.65 руб.</PrimaryText>
          </div>
        </Content>
        <Content>
          <div>
            <SecondaryText tid="Риск доначисления" />
          </div>
          <div>
            <RedText>47 438.93 руб.</RedText>
          </div>
        </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-column-gap: ${spacing(2)};
`;

const Content = styled.div`
  div {
    margin: ${spacing(2)} 0;
  }
`;

const FullstarIcon = styled(Fullstar)`
  margin-right: ${spacing(2)};
`;

const LightText = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const RedText = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;
