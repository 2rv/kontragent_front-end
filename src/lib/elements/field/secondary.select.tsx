import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { ReactComponent as ArrowIcon } from '../../../asset/svg/selectArrow.svg';
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
      <SelectArrowIcon />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 46px;
  position: relative;
  display: grid;
  align-items: center;
`;

const SelectArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: ${spacing(4)};
  pointer-events: none;
`;

const Select = styled.select`
  height: 100%;
  width: 100%;
  padding-left: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  appearance: none;
  border: none;
  cursor: pointer;
  background-color: ${THEME_COLOR.COLOR.BASE};
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
