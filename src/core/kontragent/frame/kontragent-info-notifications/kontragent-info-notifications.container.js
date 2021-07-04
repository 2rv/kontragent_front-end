import { KontragentInfoNotificationsComponent } from './kontragent-info-notifications.component';
export function KontragentInfoNotificationsContainer(props) {
  return (
    <KontragentInfoNotificationsComponent
      kontragentInfoNotificationsFrameData={
        props.kontragentInfoNotificationsFrameData
      }
    />
  );
}
