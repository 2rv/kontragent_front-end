import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { ReactComponent as ArrowIcon } from '../../../asset/svg/selectArrow.svg';
import { SecondarySelectPropsType } from './type.field';

export function SecodarySelect(props: SecondarySelectPropsType) {
  const { onChange, option } = props;
  return (
    <SelectWrapper>
      <Select onChange={(e) => onChange(e.target.value)}>
        {option.map((e, index) => (
          <option key={e.tid + index} value={e.id}>
            {text(e.tid, e.tvalue)}
          </option>
        ))}
      </Select>
      <SelectArrowIcon />
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SelectArrowIcon = styled(ArrowIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${spacing(4)};
  pointer-events: none;
`;

const Select = styled.select`
  width: 100%;
  appearance: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: none;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  cursor: pointer;
  background-color: ${THEME_COLOR.COLOR.BASE};
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
