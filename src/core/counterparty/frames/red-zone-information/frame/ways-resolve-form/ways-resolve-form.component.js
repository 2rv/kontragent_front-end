import styled from 'styled-components';
import { PrimaryBox } from '../../../../../../lib/elements/box';
import {
  IndentLayout,
  SectionLayout,
} from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { SecondaryButton } from '../../../../../../lib/elements/button';
import { PrimaryDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../../../lib/theme';

import { Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';

export function WaysResolveFormComponent(props) {
  const {
    data,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const HandleTotalPrice = () => {
    return data.reduce(
      (acc, { name, price }) => (values[name] ? (acc = acc + price) : acc),
      0,
    );
  };

  return (
    <Form>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout type="LARGE">
            <Title tid="COUNTERPARTY.DETAIL_INFORMATION.DANGER_NOTICE_TITLE" />
            <ContentCase>
              {data.map((item, index) => {
                return (
                  <CheckboxCase key={index} checked={values[item.name]}>
                    <DangerNoticeTitle
                      tid={item.title}
                      checked={values[item.name]}
                    />
                    <DangerNoticeDescription tid={item.description} />
                    <div>
                      <DangerNoticePrice tid={item.price} />
                      &nbsp;
                      <LightGrayText tid="руб." />
                    </div>
                    <Checkbox name={item.name} type="checkbox" />
                  </CheckboxCase>
                );
              })}
            </ContentCase>
            <PrimaryDivider />
            <FooterCase>
              <Case>
                <LightGrayText tid="COUNTERPARTY.RED_ZONE.PRICE_OF_RESOLVING_ISSUE" />
                <BlueText>
                  {HandleTotalPrice()}&nbsp;
                  <BoldValuteText tid="руб." />
                </BlueText>
              </Case>
              <SecondaryButton tid="COUNTERPARTY.RED_ZONE.ORDER" />
            </FooterCase>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </Form>
  );
}
const DangerNoticeTitle = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 21px;
  ${(p) => p.checked && `color: ${THEME_COLOR.TEXT.ACCENT};`};
`;
const DangerNoticeDescription = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  margin: ${spacing(4)} 0;
  line-height: 21px;
`;
const DangerNoticePrice = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  margin-top: ${spacing(4)};
  line-height: 21px;
`;
const ContentCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(8)};
`;
const CheckboxCase = styled.label`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  border-radius: 10px;
  padding: ${spacing(4)};
  border: 2px solid transparent;
  transition: 0.2s ease-in;
  :hover {
    box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  background-color: #f3f3f3;
  ${(p) => p.checked && `border-color: #3AB8FF; background-color: #fff;`}
`;
const Checkbox = styled(Field)`
  display: none;
`;
const LightGrayText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const FooterCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const BoldValuteText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const BlueText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.COLOR.ACCENT};
`;
const Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
