import styled from 'styled-components';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';
import { ReactComponent as OptionIcon } from '../../../asset/svg/option-icon.svg';
import { SectionLayout, IndentLayout } from '../../../lib/elements/layout';
import { SecondaryText, PrimaryText } from '../../../lib/elements/text';
import { IconButton, SecondaryTextButton } from 'src/lib/elements/button';
import { BaseList } from '../../../lib/elements/list';
import { PrimaryBox } from '../../../lib/elements/box';
import { CircleDivider } from '../../../lib/elements/divider';

export function CompanyMembersList(props) {
  const { companyMembersListData, openPopover } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <SectionLayout type="MEDIUM">
            <Title tid="COMPANY_MEMBERS.LIST_BOX.TITLE_COMPANY_MEMBERS" />
            <Desctiption tid="COMPANY_MEMBERS.LIST_BOX.DESCRIPTION_BOX_LIST" />
          </SectionLayout>
          <BaseList
            itemBackground={THEME_COLOR.COLOR.SECONDARY}
            listData={companyMembersListData}
            skeletonAction={false}
          >
            {(props) => {
              const { avatar, name, id, roleInfo, inTheCompany } = props;
              return (
                <Content>
                  <InfoCase>
                    <Avatar src={avatar} />
                    <SectionLayout type="SMALL">
                      <Name tid={name} />
                      <Desctiption>
                        {roleInfo.roleName}
                        &nbsp;
                        <CircleDivider />
                        <Time tid={inTheCompany} />
                      </Desctiption>
                    </SectionLayout>
                  </InfoCase>
                  <IconButton
                    onClick={(e) => openPopover(e, { name, id, roleInfo })}
                  >
                    <OptionIcon />
                  </IconButton>
                </Content>
              );
            }}
          </BaseList>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: ${spacing(4)};
  min-width: max-content;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const InfoCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;
const Name = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Desctiption = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
const Time = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;