import { DangerNotice1Component } from './danger-notice-1.component';
import { DangerNotice2Component } from './danger-notice-2.component';

export function DangerNoticesComponent({ dangerNotices1, dangerNotices2 }) {
  return (
    <div>
      <DangerNotice1Component dangerNotices1={dangerNotices1} />
      <DangerNotice2Component dangerNotices2={dangerNotices2} />
    </div>
  );
}
