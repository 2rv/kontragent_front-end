import { SectionLayout } from '../../../../lib/elements/layout';
import { ReviewCompanyListItem } from './review-company-list.item';
import { PrimaryLink } from '../../../../lib/elements/link';
export function ReviewCompanyListComponent(props) {
  return (
    <SectionLayout>
      {props.data &&
        props.data.map((companyData, index) => (
          <ReviewCompanyListItem key={index} companyData={companyData} />
        ))}
      <PrimaryLink />
    </SectionLayout>
  );
}
