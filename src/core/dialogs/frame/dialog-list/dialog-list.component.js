import styled from 'styled-components';

import { DialogListItemComponent } from './dialog-list-item.component';

import { ReactComponent as Search } from '../../../../asset/svg/search.svg';
import { ReactComponent as ArrowIcon } from '../../../../asset/svg/selectArrow.svg';

import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function DialogListComponent({ usersDialogList }) {
  return (
    <DialogListLayout>
      <DialogListHeader>
        <DialogListHeaderText tid="Диалоги" />
        <SelectDialog name="allDialogs">
          {[ 'Все диалоги' ].map((dialog, index) => (
            <option key={index} value={dialog}>
              {dialog}
            </option>
          ))}
        </SelectDialog>
        <SelectArrowIcon />
      </DialogListHeader>

      <div>
        <FindDialogContainer>
          <FindDialogInput placeholder="Найти диалог или сообщение" />
          <SearchIcon />
        </FindDialogContainer>
        {usersDialogList.map((userDialog) => (
          <DialogListItemComponent key={userDialog.id} {...userDialog} />
        ))}
      </div>
    </DialogListLayout>
  );
}

const DialogListLayout = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${spacing(8)};
`;

const DialogListHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${spacing(6)};
`;

const DialogListHeaderText = styled(PrimaryTitleText)`
  position: relative;
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-right: ${spacing(13)};
`;

const SelectDialog = styled.select`
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
  pointer-events: none;
`;

const FindDialogContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const FindDialogInput = styled.input`
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
  right: ${spacing(3)};
  cursor: pointer;
`;
