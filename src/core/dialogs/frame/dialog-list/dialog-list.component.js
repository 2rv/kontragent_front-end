import styled from 'styled-components';

import { DialogListItemComponent } from './dialog-list-item.component';

import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { SecodarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { DIALOG_LIST_HEADER_SELECT_OPTIONS } from './dialog-list.type';
import { spacing, THEME_SIZE } from '../../../../lib/theme';

export function DialogListComponent(props) {
  const { SelectOnChange, usersDialogList } = props;
  console.log(usersDialogList);
  return (
    <IndentLayout>
      <DialogListHeader>
        <DialogListHeaderText tid="DIALOGS.DIALOG_LIST.TITLE" />
        <SecodarySelect
          onChange={SelectOnChange}
          option={DIALOG_LIST_HEADER_SELECT_OPTIONS}
        />
      </DialogListHeader>

      <SectionLayout>
        <SecondaryInput placeholderTid="DIALOGS.DIALOG_LIST.SEARCH_PLACEHOLDER" />

        {usersDialogList.map((userDialog) => (
          <DialogListItemComponent key={userDialog.id} {...userDialog} />
        ))}
      </SectionLayout>
    </IndentLayout>
  );
}

const DialogListHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing(6)};
`;

const DialogListHeaderText = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-right: ${spacing(13)};
`;
