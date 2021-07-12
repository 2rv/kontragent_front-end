import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon-15x15.svg';
import { PrimaryInput } from '../../../../lib/elements/input/primary.input';
import { text } from '../../../../lib/common/text';

export function ListHeaderSearchComponent() {
  return (
    <Container>
      <Input placeholder={text('MY_COUNTERPARTIES_LIST.INPUT_PLACEHOLDER')} />
      <IconContainer>
        <FindIcon />
      </IconContainer>
    </Container>
  );
}

const Input = styled(PrimaryInput)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding-right: ${spacing(11)};
  background-color: inherit;
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: ${spacing(4)};
  top: 0;
  bottom: 0;
`;

const Container = styled.div`
  position: relative;
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
