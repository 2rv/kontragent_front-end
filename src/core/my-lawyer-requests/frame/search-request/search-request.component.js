import styled from 'styled-components';

import { ReactComponent as Search } from '../../../../asset/svg/search.svg';
import { ReactComponent as ArrowIcon } from '../../../../asset/svg/selectArrow.svg';

import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';
import { text } from '../../../../lib/common/text';

export function SearchRequestsComponent() {
  return (
    <SearchRequestsContainer>
      <SearchLawyerRequestsContent>
        <SearchLawyerRequestsInput placeholder={text('MY_LAWYER_REQUESTS.FIND_REQUEST')} />
        <SearchIcon />
      </SearchLawyerRequestsContent>
      <SearchLawyerRequestsContent>
        <LawyerRequestsSortSelect name="lawyerRequestSort">
          {[ 'MY_LAWYER_REQUESTS.SELECT_OPTION.BY_DATE', 'MY_LAWYER_REQUESTS.SELECT_OPTION.BY_MONTH' ].map((dialog, index) => (
            <option key={index} value={text(dialog)}>
              {text(dialog)}
            </option>
          ))}
        </LawyerRequestsSortSelect>
        <SelectArrowIcon />
      </SearchLawyerRequestsContent>
    </SearchRequestsContainer>
  );
}

const SearchRequestsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: ${spacing(5)};
  margin: ${spacing(5)} 0;
`;

const SearchLawyerRequestsContent = styled.div`
  position: relative;
`;

const SearchLawyerRequestsInput = styled.input`
  width: 100%;
  background: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
  font-size: ${THEME_SIZE.FONT.SMALL};
  border: 1px solid transparent;
  &:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: ${spacing(4)};
  top: ${spacing(4)};
  cursor: pointer;
`;

const LawyerRequestsSortSelect = styled.select`
  width: 100%;
  appearance: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: none;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  cursor: pointer;
  background-color: ${THEME_COLOR.COLOR.BASE};
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;

const SelectArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: ${spacing(4)};
  top: ${spacing(5.5)};
  pointer-events: none;
`;
