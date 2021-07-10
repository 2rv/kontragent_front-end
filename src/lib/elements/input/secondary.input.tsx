import styled from 'styled-components';
import { PrimaryInput } from './primary.input';
import { SecondaryInputPropsType } from './type.input';
import { ReactComponent as SearchIcon } from '../../../asset/svg/searchIcon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';

export function SecondaryInput(props: SecondaryInputPropsType) {
  const { onChange, placeholder } = props;
  return (
    <Container>
      <Input onChange={onChange} placeholder={placeholder} />
      <IconContainer>
        <SearchIcon />
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
