import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';
import { ReferralItemComponent } from './referral-item.component';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ReferralListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    referralList,
  } = props;
  return (
    <SectionLayout type="LARGE">
      <PrimaryTitleText tid="REFERRAL.REFERRAL_LIST" />
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            {referralList.map((data, index) => (
              <ReferralItemComponent key={index} data={data} />
            ))}
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </SectionLayout>
  );
}
