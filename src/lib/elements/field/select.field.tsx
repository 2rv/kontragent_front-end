import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

import { SecondaryText } from '../text';

import { ReactComponent as ArrowIcon } from '../../../asset/svg/selectArrow.svg';

import { SelectFieldPropsType } from './type.field';

export function SelectField(props: SelectFieldPropsType) {
  const { onChange, onBlur, option, titleTid, name } = props;
  return (
    <Container>
      <Title tid={titleTid} />
      <SelectWrapper>
        <Select onBlur={onBlur} onChange={onChange} name={name}>
          {option.map((e, index) => (
            <option key={e.tid + index} value={e.id}>
              {text(e.tid, e.tvalue)}
            </option>
          ))}
        </Select>
        <SelectArrowIcon />
      </SelectWrapper>
    </Container>
  );
}

const SelectWrapper = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title: typeof SecondaryText = styled(SecondaryText)`
  margin-bottom: ${spacing(2)};
`;

const Select = styled.select`
  width: 100%;
  appearance: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: none;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  cursor: pointer;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
