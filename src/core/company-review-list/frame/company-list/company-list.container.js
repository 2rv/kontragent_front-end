import { CompanyListComponent } from './company-list.component';

export function CompanyListContainer(props) {
  const { companyListData } = props;
  return <CompanyListComponent companyListData={companyListData} />;
}
