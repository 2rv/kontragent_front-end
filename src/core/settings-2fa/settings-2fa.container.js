import { Settings2FAComponent } from './settings-2fa.component';

export function Settings2FAContainer() {
  return (
    <Settings2FAComponent
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
