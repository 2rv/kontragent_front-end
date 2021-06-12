import { AdvertComponent } from './advert.component';

export function AdvertContainer(props) {
  return (
    <AdvertComponent
      type={props.type}
      advertImageURL={'https://via.placeholder.com/3000x3000'}
    />
  );
}
