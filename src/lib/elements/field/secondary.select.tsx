import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { ReactComponent as ArrowIcon } from '../../../asset/svg/select-arrow.svg';
import { SecondarySelectPropsType } from './type.field';

export function SecondarySelect(props: SecondarySelectPropsType) {
  const { option } = props;
  return (
    <Container>
      <Select>
        {option.map((e, index) => (
          <option key={e.tid + index} value={e.id}>
            {text(e.tid, e.tvalue)}
          </option>
        ))}
      </Select>
      <Icon />
    </Container>
  );
}

const Container = styled.div`
  height: 46px;
  position: relative;
  display: grid;
  align-items: center;
`;

const Icon = styled(ArrowIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${spacing(4)};
  pointer-events: none;
`;

const Select = styled.select`
  background-color: ${THEME_COLOR.COLOR.BASE};
  height: inherit;
  display: flex;
  width: inherit;
  min-width: fit-content;
  padding: 0 ${spacing(7)} 0 ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  appearance: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
