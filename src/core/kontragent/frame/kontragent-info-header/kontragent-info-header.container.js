import { KontragentInfoHeaderComponent } from './kontragent-info-header.component';
export function KontragentInfoHeaderContainer(props) {
  return (
    <KontragentInfoHeaderComponent
      kontragentInfoHeaderFrameData={props.kontragentInfoHeaderFrameData}
    />
  );
}
