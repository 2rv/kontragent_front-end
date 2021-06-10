import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

import { SecondaryText } from '../text';

import { SelectFieldPropsType } from './type.field';

export function SelectField(props: SelectFieldPropsType) {
  const { onChange, onBlur, option, titleTid, name } = props;
  return (
    <Container>
      <Title tid={titleTid} />
      <Select onBlur={onBlur} onChange={onChange} name={name}>
        {option.map((e, index) => (
          <option key={e.tid + index} value={e.id}>
            {text(e.tid, e.tvalue)}
          </option>
        ))}
      </Select>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title: typeof SecondaryText = styled(SecondaryText)`
  margin-bottom: ${spacing(2)};
`;

const Select = styled.select`
  appearance: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: none;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  cursor: pointer;
  background: url('/static/img/selectArrow.svg') no-repeat;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  background-size: 10px;
  background-position: calc(100% - 12px) center;
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
