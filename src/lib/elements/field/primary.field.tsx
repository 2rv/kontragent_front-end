import styled from 'styled-components';
import React from 'react';

import { SecondaryText } from '../text';
import { PrimaryInput } from '../input';
import { ErrorMessage } from '../error';

import { spacing } from '../../theme';
import { FieldPrimaryPropsType } from './type.field';

import { text } from '../../common/text';

export function PrimaryField(props: FieldPrimaryPropsType) {
  const {
    titleTid,
    placeholderTid,
    name,
    onChange,
    onBlur,
    value,
    error,
    type,
  } = props;

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <PrimaryInput
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
        isError={!!error}
        type={type}
      />
      {error && <InputError error={error} />}
    </Container>
  );
}

const Title: typeof SecondaryText = styled(SecondaryText)`
  margin-bottom: ${spacing(2)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputError: typeof ErrorMessage = styled(ErrorMessage)`
  margin-top: ${spacing(1)};
`;
