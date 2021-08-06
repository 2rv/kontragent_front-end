import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../theme';
import { FieldLayout } from '../../../lib/elements/layout';
import { ReactComponent as ReplayIcon } from '../../../asset/svg/replay.svg';
import { PrimaryField } from '../../../lib/elements/field';
import { FieldSkeleton } from '../../elements/skeleton';
import { ErrorMessage } from '../../../lib/elements/error';

export const CaptchaFieldComponent = ({
  captchaLoading,
  captchaError,
  captchaErrorMessage,
  captcha,
  loadCaptcha,
  titleTid,
  placeholderTid,
  name,
  onChange,
  onBlur,
  value,
  error,
}) => {
  return (
    <div>
      <FieldLayout type="double">
        <PrimaryField
          titleTid={titleTid}
          placeholderTid={placeholderTid}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={captchaErrorMessage || error}
        />

        <Captcha>
          {captchaLoading ? (
            <FieldSkeleton />
          ) : (
            <React.Fragment>
              <CaptchaImage src={captcha} />
              <Wrapper onClick={loadCaptcha}>
                <Icon />
              </Wrapper>
            </React.Fragment>
          )}
        </Captcha>
      </FieldLayout>
      {/* 
      {error && (
        <ErrorContainer>
          <ErrorMessage error={error} />
        </ErrorContainer>
      )}

      {(captchaError || captchaErrorMessage) && (
        <ErrorContainer>
          <ErrorMessage error={captchaErrorMessage} />
        </ErrorContainer>
      )} */}
    </div>
  );
};
const Icon = styled(ReplayIcon)`
  width: 20px;
`;

const Captcha = styled.div`
  width: 100%;
  min-width: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  overflow: hidden;
  margin-top: ${spacing(5.5)};
  height: 46px;
`;

const CaptchaImage = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: ${spacing(2)};
  align-items: center;
  cursor: pointer;
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const ErrorContainer = styled.div`
  margin-top: ${spacing(1)};
`;
