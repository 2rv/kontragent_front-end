import styled from 'styled-components';
import { PrimaryInput } from './primary.input';
import { SecondaryInputPropsType } from './type.input';
import { ReactComponent as SearchIcon } from '../../../asset/svg/searchIcon.svg';
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
        <SearchIcon />
      </IconContainer>
    </Container>
  );
}

const Input = styled(PrimaryInput)`
  background-color: inherit;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  width: 100%;
  height: 46px;
  padding-right: ${spacing(11)};
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
