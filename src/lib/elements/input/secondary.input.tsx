import styled from 'styled-components';
import { PrimaryInput } from './primary.input';
import { SecondaryInputPropsType } from './type.input';
import { ReactComponent as FindIcon } from '../../../asset/svg/find.svg';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';

export function SecondaryInput(props: SecondaryInputPropsType) {
  const { onChange, placeholder, placeholderTvalue } = props;
  return (
    <Container>
      <Input
        onChange={onChange}
        placeholder={text(placeholder, placeholderTvalue)}
      />
      <IconContainer>
        <Icon />
      </IconContainer>
    </Container>
  );
}
const Icon = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Input = styled(PrimaryInput)`
  background-color: inherit;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  display: flex;
  flex: 1;
  height: 46px;
  min-width: min-content;
  padding-right: ${spacing(11)};
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  right: 1px;
  bottom: 1px;
  top: 1px;
  padding: ${spacing(3)};
  align-self: flex-end;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
