import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { PrimarySelect } from '../../../../lib/elements/field';

export function ListSortComponent(props) {
  const { sortOptions } = props;
  return <Select option={sortOptions} />;
}

const Select = styled(PrimarySelect)`
  select {
    background-color: ${THEME_COLOR.COLOR.BASE};
    color: ${THEME_COLOR.TEXT.SECONDARY};
    font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  }
`;
