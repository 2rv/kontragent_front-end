import { CompanyListComponent } from './company-list.component';
export function CompanyListContainer(props) {
  return <CompanyListComponent companyListData={props.companyListData} />;
}
