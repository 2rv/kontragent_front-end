import styled from 'styled-components';

import { DialogListItemComponent } from './dialog-list-item.component';

import { PrimaryTitleText } from '../../../../lib/elements/text';
import { SelectField } from '../../../../lib/elements/field';
import { PrimaryInput } from '../../../../lib/elements/input';
import { spacing, THEME_SIZE } from '../../../../lib/theme';

export function DialogListComponent({ usersDialogList }) {
  return (
    <DialogListLayout>
      <DialogListHeader>
        <DialogListHeaderText tid="Диалоги" />
        <DialogListHeaderSelect
          name="allDialogs"
          option={[{ tid: 'Все диалоги' }]}
        />
      </DialogListHeader>

      <div>
        <PrimaryInput placeholder="Найти диалог или сообщение" />
        {usersDialogList.map((userDialog) => (
          <DialogListItemComponent key={userDialog.id} {...userDialog} />
        ))}
      </div>
    </DialogListLayout>
  );
}

const DialogListLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const DialogListHeader = styled.div`
  display: flex;
  align-items: center;
`;

const DialogListHeaderText = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-right: ${spacing(8)};
`;

const DialogListHeaderSelect = styled(SelectField)`
  width: 167px;
`;
