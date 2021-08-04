import styled from 'styled-components';
import { BaseList } from '../../../../lib/elements/list';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SectionLayout } from '../../../../lib/elements/layout';
import { CircleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME } from '../../my-companies-review-company-list.type';
import { COMPANY_MEMBERS_ROUTE_PATH } from '../../../company-members/company-members.constant';

export function ReviewCompanyListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCompaniesListData,
  } = props;
  return (
    <BaseList
      listData={myCompaniesListData}
      skeletonAction={pageLoading || isPending}
      pathname={COMPANY_MEMBERS_ROUTE_PATH}
      dynamicId={MY_COMPANIES_REVIEW_COMPANY_LIST_DATA_NAME.COMPANY_ID}
    >
      {(props) => {
        const { companyName, role, date = 'Нет сведений' } = props;
        return (
          <Container>
            <SectionLayout type="SMALL">
              <CompanyName>{companyName}</CompanyName>
              <Line>
                <Role>{role}</Role>
                <CircleDivider />
                <Time>{date}</Time>
              </Line>
            </SectionLayout>
            <OptionIcon />
          </Container>
        );
      }}
    </BaseList>
  );
}
const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Role = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
