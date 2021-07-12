import { KontragentCommentsHeaderComponent } from './kontragent-comments-header.component';
export function KontragentCommentsHeaderContainer(props) {
  const { companyName, companyType } = props;
  return (
    <KontragentCommentsHeaderComponent
      companyName={companyName}
      companyType={companyType}
    />
  );
}
