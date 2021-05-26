import styled from 'styled-components';
import { InputCommonPropsType } from './type.input';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';
import { spacing } from '../../theme';

export function PrimaryInput(props: InputCommonPropsType) {
  const { onChange, onBlur, value, name, placeholder, isError, type } = props;
  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type ? type : 'text'}
      isError={isError}
    />
  );
}

const Input = styled.input`
  background: ${(props) =>
    !props.isError
      ? THEME_COLOR.INPUT.BACKGROUND_COLOR
      : THEME_COLOR.INPUT.ERROR_BACKGROUND_COLOR};
  border-radius: ${THEME_SIZE.RADIUS.FIELD};
  padding: ${spacing(3)};
  font-size: ${THEME_SIZE.FONT.SMALL};
  border: ${(props) => (props.isError ? '1px solid #EB5757' : 'none')};
  &:focus {
    border: 1px solid #b5b5b5;
    transition: border 0s;
  }
`;
