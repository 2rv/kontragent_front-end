import { KontragentRatingRiskContainer } from './frame/kontragent-rating-risk';
import { KontragentInfoDataContainer } from './frame/kontragent-info-data';
import { KontragentInfoNotificationsContainer } from './frame/kontragent-info-notifications';
import { KontragentInfoHeaderContainer } from './frame/kontragent-info-header';
import { SectionLayout } from '../../lib/elements/layout';
export function KontragentComponent(props) {
  return (
    <SectionLayout type="HUGE">
      <KontragentInfoHeaderContainer
        kontragentInfoHeaderFrameData={props.kontragentInfoHeaderFrameData}
      />
      <KontragentInfoNotificationsContainer
        kontragentInfoNotificationsFrameData={
          props.kontragentInfoNotificationsFrameData
        }
      />
      <KontragentInfoDataContainer
        kontragentInfoDataFrameData={props.kontragentInfoDataFrameData}
      />
      <KontragentRatingRiskContainer
        kontragentRatingRiskData={props.kontragentRatingRiskData}
      />
    </SectionLayout>
  );
}
