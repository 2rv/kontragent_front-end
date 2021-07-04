import { KontragentInfoDataComponent } from './kontragent-info-data.component';
export function KontragentInfoDataContainer(props) {
  return (
    <KontragentInfoDataComponent
      kontragentInfoDataFrameData={props.kontragentInfoDataFrameData}
    />
  );
}
