import styled from 'styled-components';

import { ReactComponent as Search } from '../../../../asset/svg/search.svg';

import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

export function MyLegalEntitesHeaderComponent(props) {
  const {
    myLegalEntitiesSelectOption,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <SectionLayout type="LARGE">
      <Title tid="MY_LEGAL_ENTITIES.TITLE" />
      <InputCase>
        <SecondaryInput placeholder="MY_LEGAL_ENTITIES.FIND_LEGAL_ENTITY" />
        <SecondarySelect option={myLegalEntitiesSelectOption} />
      </InputCase>
    </SectionLayout>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 226px);
  gap: ${spacing(4)};
  width: 100%;
`;
