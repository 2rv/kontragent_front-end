import React from 'react';

import { USERS_DIALOG_LIST } from './dialogs.constant';
import { DialogsComponent } from './dialogs.component';

import { DashboardLayout } from '../../lib/common/dashboard';

export function DialogsContainer() {
  return (
    <DashboardLayout>
      <DialogsComponent usersDialogList={USERS_DIALOG_LIST} />
    </DashboardLayout>
  );
}
