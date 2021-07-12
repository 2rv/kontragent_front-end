import { LegalEntitiesListComponent } from './legal-entities-list.component';

export function LegalEntitiesListContainer(props) {
  const { myLegalEntitiesListData } = props;
  return (
    <LegalEntitiesListComponent
      myLegalEntitiesListData={myLegalEntitiesListData}
    />
  );
}
