import styled from 'styled-components';
import { THEME_COLOR, THEME_VALUE, spacing } from '../../../../lib/theme';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import Image from 'next/image';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

export function AccountInfoComponent() {
  return (
    <AccountInfoBox>
      <IndentLayout type="SMALL">
        <AccountInfoContentLayout>
          <Image
            src="/static/img/tempAccountInfoProfileImage.svg"
            width={56}
            height={56}
          />
          <AccountInfoDataLayout>
            <Name>Анастасия Добро</Name>
            <div>
              <PriceValue>1550</PriceValue>
              <SecondaryText tid="SIDEBAR.ACCOUNT_INFO_CURRENCY" />
            </div>
          </AccountInfoDataLayout>
        </AccountInfoContentLayout>
      </IndentLayout>
    </AccountInfoBox>
  );
}

const AccountInfoBox = styled(PrimaryBox)`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;

const AccountInfoContentLayout = styled.div`
  display: flex;
  align-items: center;
`;

const AccountInfoDataLayout = styled.div`
  display: grid;
  gap: ${spacing(2)};
  padding-left: ${spacing(3)};
`;

const Name = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const PriceValue = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
