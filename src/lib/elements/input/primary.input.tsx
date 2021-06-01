import styled from 'styled-components';
import { InputCommonPropsType } from './type.input';
import { THEME_COLOR, THEME_VALUE, THEME_SIZE } from '../../theme';
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
  background: ${(props: InputCommonPropsType) =>
    !props.isError ? THEME_COLOR.COLOR.SECONDARY : THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.FIELD};
  padding: ${spacing(3)};
  font-size: ${THEME_SIZE.FONT.SMALL};

  border: ${(props: InputCommonPropsType) =>
    props.isError
      ? `1px solid ${THEME_COLOR.COLOR.VALIDATION}`
      : '1px solid transparent'};

  &:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }

  &:-webkit-autofill {
    border: 1px solid transparent;
  }
  &:-webkit-autofill:hover {
    border: 1px solid transparent;
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  &:-webkit-autofill:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
`;
