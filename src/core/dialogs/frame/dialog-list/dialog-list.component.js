import styled from 'styled-components';

import { DialogListItemComponent } from './dialog-list-item.component';

import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../../../lib/theme';

export function DialogListComponent(props) {
  const { usersDialogList } = props;
  console.log(usersDialogList);
  return (
    <IndentLayout>
      <DialogListHeader>
        <DialogListHeaderText tid="DIALOGS.DIALOG_LIST.TITLE" />
      </DialogListHeader>

      <SectionLayout>
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
